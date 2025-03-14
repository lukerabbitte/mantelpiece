"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error("Posts page error:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
                <p className="text-gray-700 mb-6">
                    {error.message || "An error occurred while loading articles"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="mb-4 sm:mb-0 rounded-md bg-primary px-4 py-2 text-white hover:opacity-90"
                    >
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="rounded-md bg-accent px-4 py-2 text-accent-foreground hover:opacity-90"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
