"use client";

import Link from "next/link";
import { useState } from "react";
import SwipeInMotionBlock from "@/components/SwipeInMotionBlock";
import { FaArrowRight, FaList } from "react-icons/fa";

/* TODO Should surely just be style wrapper on the ShadCN Button component */
const CtaButton = ({ text, href, handleClick, disabled, className = "", size = "medium" }) => {
    const [showArrow, setShowArrow] = useState(false);

    const sizeClasses = {
        medium: {
            outer: "p-[0.6em]",
            inner: "p-[0.6em]",
            text: "px-2 py-1 text-sm",
        },
        default: {
            outer: "p-[1.2em]",
            inner: "p-[1.2em]",
            text: "px-4 py-2",
        },
    };

    const { outer, inner, text: textClass } = sizeClasses[size] || sizeClasses.default;

    const content = (
        <div
            className={`${outer} bg-slate-500/20 backdrop-blur-sm rounded-full max-w-fit transition-transform duration-400 ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:opacity-90"
            } ${className}`}
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
        >
            <div
                className={`font-highlight font-black bg-primary ${inner} rounded-full text-foreground`}
            >
                <div
                    className={`${textClass} bg-primary-foreground px-3 rounded-full flex flex-row gap-2 items-center justify-center`}
                >
                    <span className="inline-block text-sm w-4">
                        <FaList />
                    </span>

                    {text}

                    <span className="inline-block text-sm w-4">
                        <SwipeInMotionBlock isVisible={showArrow}>
                            <FaArrowRight />
                        </SwipeInMotionBlock>
                    </span>
                </div>
            </div>
        </div>
    );

    if (handleClick) {
        return (
            <div
                onClick={disabled ? undefined : handleClick}
                className={disabled ? "cursor-not-allowed" : ""}
            >
                {content}
            </div>
        );
    }

    if (href && !disabled) {
        return <Link href={href}>{content}</Link>;
    }

    return <div>{content}</div>;
};

export default CtaButton;
