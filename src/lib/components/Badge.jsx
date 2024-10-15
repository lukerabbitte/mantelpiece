import React from 'react';
import { getRandomColorIndex } from '@/utils/getRandomColorIndex';
import { useColorPalette } from '@/lib/components/ThemeProvider';

const Badge = ({ icon: Icon, text, colorPalette }) => {

    const getGradient = () => {
        if (!colorPalette || colorPalette.length === 0) {
            return 'initial';
        }
        if (colorPalette.length === 1) {
            return colorPalette[0];
        }
        const colorPaletteLength = colorPalette.length;
        const colorIndex1 = getRandomColorIndex(-1, colorPaletteLength);
        const colorIndex2 = getRandomColorIndex(colorIndex1, colorPaletteLength);
        return `linear-gradient(to right, ${colorPalette[colorIndex1]}, ${colorPalette[colorIndex2]})`;
    };

    const gradient = getGradient();

    return (
        <div
            className="flex items-center bg-primary text-primary-foreground text-xs font-black uppercase rounded-lg px-2 py-1 transition-all duration-300 ease-in-out hover:animate-gradientMove"
            style={{ background: gradient, backgroundSize: '200% 200%' }}
        >
            {Icon && <Icon className="mr-2" />}
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {text}
            </span>
        </div>
    );
};

export default Badge;