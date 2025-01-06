"use client";

import { useEffect, useRef } from "react";
import { debounce } from "@/utils/debounce";

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

const FloatingText = ({ text }) => {
    const outerTextHolderRef = useRef(null);
    const innerTextHolderRef = useRef(null);
    const textLettersRef = useRef([]);
    const initialLetterPositions = useRef([]);

    useEffect(() => {
        const setInitialPositions = () => {
            textLettersRef.current.forEach((letter, index) => {
                const originalLeft = letter?.offsetLeft;
                const originalTop = letter?.offsetTop;

                initialLetterPositions.current[index] = {
                    left: originalLeft,
                    top: originalTop,
                };
            });
        };

        const setRandomPositions = () => {
            textLettersRef.current.forEach((letter) => {
                const letterHeight = letter?.offsetHeight;
                const letterWidth = letter?.offsetWidth;
                const innerTextHolderHeight = innerTextHolderRef.current.offsetHeight;
                const innerTextHolderWidth = innerTextHolderRef.current.offsetWidth;

                const adjustedTop = Math.random() * (innerTextHolderHeight - letterHeight);
                const adjustedLeft = Math.random() * (innerTextHolderWidth - letterWidth);

                const randomLevel =
                    DISTANCE_LEVELS[Math.floor(Math.random() * DISTANCE_LEVELS.length)];

                letter.style.position = "absolute";
                letter.style.top = `${adjustedTop}px`;
                letter.style.left = `${adjustedLeft}px`;
                letter.style.transition = "none";

                letter.style.filter = `blur(${randomLevel.blur}px)`;
                letter.style.transform = `scale(${randomLevel.size})`;
                letter.style.opacity = randomLevel.opacity;
            });
        };

        const setBasePositions = () => {
            textLettersRef.current.forEach((letter, index) => {
                const { left, top } = initialLetterPositions.current[index]; // Use the stored original positions to reset

                letter.style.position = "absolute";
                letter.style.top = `${top}px`;
                letter.style.left = `${left}px`;
                letter.style.transition = "all 0.15s ease-in-out";

                letter.style.transform = "translate(0, 0) scale(1)";
                letter.style.filter = "none";
                letter.style.opacity = "1";
            });
        };

        // Call setInitialPositions to track the initial letter positions on page load
        setInitialPositions();

        // Start listening to scroll, set random positions as we scroll down and revert to base positions when we return to top

        // TODO it would be nice to detect start of scroll event and trigger the updates every 20ms while scrolling is true.
        const handleScroll = debounce(() => {
            const outerTop = outerTextHolderRef.current?.getBoundingClientRect().top;
            const innerTop = innerTextHolderRef.current?.getBoundingClientRect().top;

            if (outerTop >= innerTop) {
                setBasePositions();
            } else {
                setRandomPositions();
            }
        }, 2);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={outerTextHolderRef} className="relative h-[1600vh] sm:h-[500vh] md:h-[300vh] w-full">
            <div ref={innerTextHolderRef} className="sticky top-0 h-screen">
                <div className="h-full flex font-bold text-4xl xxs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl justify-center">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            ref={(el) => (textLettersRef.current[index] = el)}
                            className=""
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FloatingText;
