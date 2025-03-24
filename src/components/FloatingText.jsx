"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import SpringMotionBlock from "./SpringMotionBlock";
import { throttle } from "@/utils/throttle";
import CtaButton from "@/components/CtaButton";

// Corresponding levels to simulate distance from each letter changing as we scroll
const DISTANCE_LEVELS = [...Array(8)].map((_, i) => ({
    blur: 4 + i * 2,
    size: 1 - i * 0.09,
    opacity: 0.6 - i * 0.05,
}));

const FloatingText = ({ text, children }) => {
    const outerTextHolderRef = useRef(null);
    const innerTextHolderRef = useRef(null);
    const lettersRef = useRef([]);
    const helperLettersRef = useRef([]);
    const baseLetterOffsetPositions = useRef([]);
    const prevScreenWidthRef = useRef(typeof window !== "undefined" ? window.innerWidth : 0);

    const [showBioText, setShowBioText] = useState(false);

    const saveBaseLetterOffsetPositions = () => {
        if (!helperLettersRef.current || !helperLettersRef.current.length) return;

        helperLettersRef.current.forEach((letter, index) => {
            if (!letter) return;
            baseLetterOffsetPositions.current[index] = {
                leftOffset: letter.offsetLeft,
                topOffset: letter.offsetTop,
            };
        });
    };

    const restoreBaseLetterOffsetPositions = () => {
        if (!lettersRef.current || !baseLetterOffsetPositions.current) return;

        lettersRef.current.forEach((letter, index) => {
            if (!letter || !baseLetterOffsetPositions.current[index]) return;

            const { leftOffset, topOffset } = baseLetterOffsetPositions.current[index];

            letter.style.position = "absolute";
            letter.style.top = `${topOffset}px`;
            letter.style.left = `${leftOffset}px`;
            letter.style.transition = "all 0.3s ease-out";

            letter.style.filter = "none";
            letter.style.transform = "translate(0, 0) scale(1)";
            letter.style.opacity = "1";
        });
    };

    const setRandomLetterPositions = throttle(() => {
        const innerTextHolder = innerTextHolderRef.current;
        const letters = lettersRef.current;

        if (!innerTextHolder || !letters?.length) return;

        const { offsetHeight: innerTextHolderHeight, offsetWidth: innerTextHolderWidth } =
            innerTextHolder;

        if (innerTextHolderHeight <= 0 || innerTextHolderWidth <= 0) return;

        letters.forEach((letter) => {
            if (!letter) return;

            const maxTop = Math.max(0, innerTextHolderHeight - letter.offsetHeight);
            const maxLeft = Math.max(0, innerTextHolderWidth - letter.offsetWidth);

            const adjustedTop = Math.random() * maxTop;
            const adjustedLeft = Math.random() * maxLeft;
            const randomLevel = DISTANCE_LEVELS[Math.floor(Math.random() * DISTANCE_LEVELS.length)];

            letter.style.position = "absolute";
            letter.style.top = `${adjustedTop}px`;
            letter.style.left = `${adjustedLeft}px`;
            letter.style.transition = "all 0.3s ease-out";

            letter.style.filter = `blur(${randomLevel.blur}px)`;
            letter.style.transform = `scale(${randomLevel.size})`;
            letter.style.opacity = `${randomLevel.opacity}`;
        });
    }, 300);

    const handleScroll = useCallback(() => {
        const outerTop = outerTextHolderRef.current?.getBoundingClientRect().top;
        const innerTop = innerTextHolderRef.current?.getBoundingClientRect().top;

        if (outerTop >= innerTop) {
            restoreBaseLetterOffsetPositions();
            setShowBioText(false);
        } else {
            setRandomLetterPositions();
            setShowBioText(true);
        }
    }, []);

    const handleResize = useCallback(() => {
        const currentWidth = window.innerWidth;
        if (Math.abs(currentWidth - prevScreenWidthRef.current) < 5) return;

        prevScreenWidthRef.current = currentWidth;

        saveBaseLetterOffsetPositions();
        restoreBaseLetterOffsetPositions();
    }, []);

    const handleAboutButtonClick = useCallback(() => {
        if (typeof window === "undefined" || !window) {
            return;
        }

        const innerTextHolderElement = innerTextHolderRef.current;
        if (!innerTextHolderElement) return;

        const targetScrollPosition =
            window.scrollY + innerTextHolderElement.getBoundingClientRect().bottom;

        window.scrollTo({
            top: targetScrollPosition,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        saveBaseLetterOffsetPositions();
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleScroll, handleResize]);

    return (
        <div ref={outerTextHolderRef} className="relative h-[200vh] w-full">
            <div ref={innerTextHolderRef} className="sticky top-0 h-screen">
                <div className="relative h-full flex font-bold text-4xl xxs:text-5xl lg:text-8xl justify-center">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            ref={(charElement) => (lettersRef.current[index] = charElement)}
                            className=""
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>

                <div className="absolute left-1/2 top-16 lg:top-28 -translate-x-1/2 w-full">
                    <SpringMotionBlock isVisible={!showBioText}>
                        <div className="w-full place-items-center pointer-events-auto">
                            <CtaButton
                                text="About"
                                handleClick={handleAboutButtonClick}
                                arrowDirection="down"
                            />
                        </div>
                    </SpringMotionBlock>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
                    <SpringMotionBlock isVisible={showBioText}>
                        <div className="backdrop-blur-xl p-4 rounded-xl shadow-lg w-full max-w-2xl mx-auto pointer-events-auto">
                            {children}
                        </div>
                    </SpringMotionBlock>
                </div>
            </div>

            {/* This is an invisible div with the sole purpose of storing the correct letter offsets for later restoration */}
            {/* This must perfectly match its equivalent above or else letter restoration logic fails */}
            <div className="absolute top-0 h-full w-full flex font-bold text-4xl xxs:text-5xl lg:text-8xl justify-center invisible">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        ref={(charElement) => (helperLettersRef.current[index] = charElement)}
                        className=""
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FloatingText;
