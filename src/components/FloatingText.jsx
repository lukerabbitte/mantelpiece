"use client";

import { useEffect, useRef } from "react";
import { debounce } from "@/utils/debounce";

const FloatingText = ({ text }) => {
    const outerTextHolderRef = useRef(null);
    const innerTextHolderRef = useRef(null);
    const textLettersRef = useRef([]);
    const initialLetterPositions = useRef([]);

    useEffect(() => {
        const setInitialPositions = () => {
            textLettersRef.current.forEach((letter, index) => {
                const originalLeft = letter.offsetLeft;
                const originalTop = letter.offsetTop;

                initialLetterPositions.current[index] = {
                    left: originalLeft,
                    top: originalTop,
                };
            });
        };

        const setRandomPositions = () => {
            textLettersRef.current.forEach((letter) => {
                const letterHeight = letter.offsetHeight;
                const letterWidth = letter.offsetWidth;
                const innerTextHolderHeight = innerTextHolderRef.current.offsetHeight;
                const innerTextHolderWidth = innerTextHolderRef.current.offsetWidth;

                const adjustedTop = Math.random() * (innerTextHolderHeight - letterHeight);
                const adjustedLeft = Math.random() * (innerTextHolderWidth - letterWidth);

                letter.style.position = "absolute";
                letter.style.top = `${adjustedTop}px`;
                letter.style.left = `${adjustedLeft}px`;
            });
        };

        const setBasePositions = () => {
            textLettersRef.current.forEach((letter, index) => {
                const { left, top } = initialLetterPositions.current[index]; // Use the stored original positions to reset

                letter.style.position = "absolute";
                letter.style.top = `${top}px`;
                letter.style.left = `${left}px`;
                letter.style.transform = "translate(0, 0)";
                letter.style.transition = "all 0.5s ease-in-out";
            });
        };

        // Call setInitialPositions to track the initial letter positions on page load
        setInitialPositions();

        // Start listening to scroll, set random positions as we scroll down and revert to base positions when we return to top
        
        // TODO it would be nice to detect start of scroll event and trigger the updates every 20ms while scrolling is true.
        const handleScroll = debounce(() => {
            const outerTop = outerTextHolderRef.current.getBoundingClientRect().top;
            const innerTop = innerTextHolderRef.current.getBoundingClientRect().top;

            if (innerTop === outerTop) {
                setBasePositions();
            } else {
                setRandomPositions();
            }
        }, 20);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={outerTextHolderRef} className="relative h-[600vh] w-full">
            <div ref={innerTextHolderRef} className="sticky top-0 h-screen transition-all duration-500 ease-in-out">
                <div className="h-full flex font-black text-4xl md:text-8xl justify-center pt-32">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            ref={(el) => (textLettersRef.current[index] = el)}
                            className="transition-all duration-500 ease-in-out"
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
