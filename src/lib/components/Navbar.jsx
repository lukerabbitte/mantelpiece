import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="relative">
                <Image
                    src="/images/caroline-kelly-wordmark.png"
                    alt="Caroline Kelly Wordmark"
                    width={300}
                    height={200}
                    className="rounded-xl"
                />
            </div>
        </div>
    );
};

export default Navbar;