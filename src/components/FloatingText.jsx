"use client";

import { useEffect, useRef, useState } from "react";
import SpringMotionBlock from "./SpringMotionBlock";
import { throttle } from "@/utils/throttle";

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
    const [showBioText, setShowBioText] = useState(false);

    useEffect(() => {
        const saveBaseLetterOffsetPositions = () => {
            helperLettersRef.current.forEach((letter, index) => {
                const baseLeftOffset = letter?.offsetLeft;
                const baseTopOffset = letter?.offsetTop;

                baseLetterOffsetPositions.current[index] = {
                    leftOffset: baseLeftOffset,
                    topOffset: baseTopOffset,
                };
            });
        };

        const restoreBaseLetterOffsetPositions = () => {
            lettersRef.current.forEach((letter, index) => {
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
            lettersRef.current.forEach((letter) => {
                const letterHeight = letter?.offsetHeight;
                const letterWidth = letter?.offsetWidth;
                const innerTextHolderHeight = innerTextHolderRef.current?.offsetHeight;
                const innerTextHolderWidth = innerTextHolderRef.current?.offsetWidth;

                const adjustedTop = Math.random() * (innerTextHolderHeight - letterHeight);
                const adjustedLeft = Math.random() * (innerTextHolderWidth - letterWidth);

                const randomLevel =
                    DISTANCE_LEVELS[Math.floor(Math.random() * DISTANCE_LEVELS.length)];

                letter.style.position = "absolute";
                letter.style.top = `${adjustedTop}px`;
                letter.style.left = `${adjustedLeft}px`;
                letter.style.transition = "all 0.3s ease-out";

                letter.style.filter = `blur(${randomLevel.blur}px)`;
                letter.style.transform = `scale(${randomLevel.size})`;
                letter.style.opacity = randomLevel.opacity;
            });
        }, 300);

        // Set random positions as we scroll down and restore base positions when we return to top
        const handleScroll = () => {
            const outerTop = outerTextHolderRef.current?.getBoundingClientRect().top;
            const innerTop = innerTextHolderRef.current?.getBoundingClientRect().top;

            if (outerTop >= innerTop) {
                restoreBaseLetterOffsetPositions();
                setShowBioText(false);
            } else {
                setRandomLetterPositions();
                setShowBioText(true);
            }
        };

        const handleResize = () => {
            saveBaseLetterOffsetPositions();
            restoreBaseLetterOffsetPositions();
        };

        saveBaseLetterOffsetPositions();
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div ref={outerTextHolderRef} className="relative h-[120vh] w-full">
            <div ref={innerTextHolderRef} className="sticky top-0 h-screen">
                <div className="h-full flex font-bold text-4xl xxs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl justify-center">
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

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
                    <SpringMotionBlock
                        isVisible={showBioText}
                        id="homepage-bio-text-spring-motion-block"
                    >
                        <div className="backdrop-blur-xl p-4 rounded-xl shadow-lg w-full max-w-2xl mx-auto pointer-events-auto">
                            {children}
                        </div>
                    </SpringMotionBlock>
                </div>
            </div>

            {/* This is an invisible div with the sole purpose of storing the correct letter offsets for later restoration */}
            <div className="absolute top-0 h-full w-full flex font-bold text-4xl xxs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl justify-center invisible">
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
