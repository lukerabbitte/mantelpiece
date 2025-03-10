import React from 'react';

const Badge = ({ icon: Icon, text }) => {

    return (
        <div
            className="flex flex-row gap-1 items-center bg-primary opacity-95 text-primary-foreground text-xs font-black uppercase rounded-lg px-1.5 py-0.5 transition-all duration-300 ease-in-out"
        >
            {Icon && <Icon/>}
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {text}
            </span>
        </div>
    );
};

export default Badge;