"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const CtaCard = ({ text }) => {
    return (
        <Link href="/posts">
            <div className="relative p-2 flex flex-col items-center justify-center w-full h-64 sm:h-80 md:h-56 xl:h-80 mx-auto rounded-xl overflow-hidden">
                <Image
                    src="/images/carosketch.jpg"
                    alt="Klimt background"
                    fill
                    className="object-cover z-0"
                    priority={true}
                />
                <div className="absolute inset-0 w-full h-full top-50 left-50 flex items-center justify-center rounded-xl"></div>
                <div className="absolute p-[1.2em] bg-slate-500/20 backdrop-blur-sm rounded-full z-10">
                    <div className="font-highlight font-black bg-primary p-[1.2em] rounded-full text-foreground">
                        <p className="px-4 py-2 bg-primary-foreground rounded-full flex flex-row gap-2 items-center justify-center">
                            {text}
                            <FaArrowRight />
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CtaCard;
