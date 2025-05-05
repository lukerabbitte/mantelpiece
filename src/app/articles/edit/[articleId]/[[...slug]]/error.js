"use client";

import { useEffect } from "react";
import CtaButton from "@/components/CtaButton";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error("Edit page error:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center p-4 gap-4 min-h-screen-minus-navbar-and-footer">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-bold flex flex-row items-center gap-2">
                    <span className="inline-flex">
                        <FaExclamationTriangle />
                    </span>
                    ERROR{" "}
                    <span className="inline-flex">
                        <FaExclamationTriangle />
                    </span>
                </h1>
                <p className="text-balance text-center text-muted-foreground max-w-prose line-clamp-3">
                    There was an error with trying to edit this article.
                </p>
            </div>
            <CtaButton text="Go Back to Account" href="/login" />
        </div>
    );
};

export default Error;
