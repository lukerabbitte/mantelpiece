"use client";

import { useEffect, useRef, useState } from "react";
import { debounce } from "@/utils/debounce";
import SpringMotionBlock from "./SpringMotionBlock";
import { throttle } from "@/utils/throttle";

// Corresponding levels to simulate distance from each letter changing as we scroll
const DISTANCE_LEVELS = [
    { blur: 0, size: 1, opacity: 1 },
    { blur: 0.03, size: 0.95, opacity: 0.9 },
    { blur: 0.06, size: 0.92, opacity: 0.8 },
    { blur: 0.09, size: 0.87, opacity: 0.7 },
    { blur: 0.12, size: 0.82, opacity: 0.6 },
    { blur: 0.15, size: 0.75, opacity: 0.5 },
    { blur: 0.18, size: 0.58, opacity: 0.4 },
    { blur: 0.2, size: 0.5, opacity: 0.2 },
];

const FloatingText = ({ text, children }) => {
    const outerTextHolderRef = useRef(null);
    const innerTextHolderRef = useRef(null);
    const lettersRef = useRef([]);
    const initialLetterPositions = useRef([]);
    const [showBioText, setShowBioText] = useState(false);

    useEffect(() => {
        const saveInitialLetterPositions = () => {
            lettersRef.current.forEach((letter, index) => {
                const originalLeftOffset = letter?.offsetLeft;
                const originalTopOffset = letter?.offsetTop;

                initialLetterPositions.current[index] = {
                    leftOffset: originalLeftOffset,
                    topOffset: originalTopOffset,
                };
            });
        };

        const setRandomLetterPositions = throttle(() => {
            console.log("SETTING RANDOM");
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

        const revertToInitialLetterPositions = () => {
            lettersRef.current.forEach((letter, index) => {
                const { leftOffset, topOffset } = initialLetterPositions.current[index]; // Use the stored original positions to reset

                letter.style.position = "absolute";
                letter.style.top = `${topOffset}px`;
                letter.style.left = `${leftOffset}px`;
                letter.style.transition = "all 0.3s ease-out";

                letter.style.filter = "none";
                letter.style.transform = "translate(0, 0) scale(1)";
                letter.style.opacity = "1";
            });
        };

        // Start listening to scroll, set random positions as we scroll down and revert to base positions when we return to top
        const handleScroll = () => {
            const outerTop = outerTextHolderRef.current?.getBoundingClientRect().top;
            const innerTop = innerTextHolderRef.current?.getBoundingClientRect().top;

            if (outerTop >= innerTop) {
                revertToInitialLetterPositions();
                setShowBioText(false);
            } else {
                setRandomLetterPositions();
                setShowBioText(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Call saveInitialLetterPositions to save the base letter positions on page load
        saveInitialLetterPositions();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={outerTextHolderRef} className="relative h-[2000px] w-full">
            <div ref={innerTextHolderRef} className="sticky top-0 h-screen">
                <div className="h-full flex font-bold text-4xl xxs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl justify-center">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            ref={(el) => (lettersRef.current[index] = el)}
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
        </div>
    );
};

export default FloatingText;
