import React from 'react';

const Badge = ({ icon: Icon, text }) => {

    return (
        <div
            className="flex items-center bg-primary opacity-95 text-primary-foreground text-xs font-black uppercase rounded-lg px-2 py-1 transition-all duration-300 ease-in-out"
        >
            {Icon && <Icon className="mr-2" />}
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {text}
            </span>
        </div>
    );
};

export default Badge;