import React from 'react';

const Badge = ({ icon: Icon, text }) => {
    return (
        <div className="flex items-center w-full bg-red-100 font-black uppercase rounded-full px-3 py-1">
            {Icon && <Icon className="mr-2" />}
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {text}
            </span>
        </div>
    );
};

export default Badge;