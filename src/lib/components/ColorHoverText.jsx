import React, { useState } from 'react';
import { getRandomColorIndex } from '@/utils/getRandomColorIndex';
import { useColorPalette } from '@/lib/components/ThemeProvider';

const ColorHoverText = ({ text, colorPalette }) => {
    const [animateEachLetter, setAnimateEachLetter] = useState(false);

    const handleMouseEnter = () => {
        setAnimateEachLetter(true);
    };

    const handleMouseLeave = () => {
        setAnimateEachLetter(false);
    };

    const colorEachLetterInString = (string, colorPalette) => {
        if (!colorPalette || colorPalette.length === 0) {
            return string.split("").map((char, index) => (
                <span key={index}>{char}</span>
            ));
        }

        let lastColorIndex = -1;
        const colorPaletteLength = colorPalette.length;

        return string.split("").map((char, index) => {
            const colorIndex = getRandomColorIndex(lastColorIndex, colorPaletteLength);
            lastColorIndex = colorIndex;
            return (
                <span
                    key={index}
                    style={{ color: colorPalette[colorIndex] }}
                >
                    {char}
                </span>
            );
        });
    };

    return (
        <h2
            className="uppercase font-semibold hover:font-black flex-grow w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {animateEachLetter ? colorEachLetterInString(text, colorPalette) : text}
        </h2>
    );
};

export default ColorHoverText;