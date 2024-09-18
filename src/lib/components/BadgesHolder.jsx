import React from 'react';
import Badge from '@/lib/components/Badge';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';

const BadgesHolder = ({ badges }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-row gap-4">
            {badges.map((badge, index) => {
                <Badge key={index} icon={badge.icon} text={badge.text} />
            })}
        </div>
    );
};

export default BadgesHolder;