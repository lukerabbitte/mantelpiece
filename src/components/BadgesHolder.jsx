import React from 'react';
import Badge from '@/components/Badge';

const BadgesHolder = ({ badges, colorPalette }) => {
    return (
        <div className="w-full flex flex-wrap gap-2">
            {badges.map((badge, index) => (
                <Badge key={index} icon={badge.icon} text={badge.text} colorPalette={colorPalette} />
            ))}
        </div>
    );
};

export default BadgesHolder;