"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaList, FaUser } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [buttonVariant, setButtonVariant] = useState("default");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setButtonVariant("blurred");
            } else {
                setButtonVariant("default");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const getButtonVariant = (path) => {
        // Exact match
        if (pathname === path) {
            return "default";
        }

        // Special case for user paths: match /user/* to the /user button
        if (path === "/user" && pathname.startsWith("/user/")) {
            return "default";
        }

        return buttonVariant;
    };

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-between items-center px-4 py-2 h-14">
            <div className="flex flex-row gap-4">
                <Button
                    asChild
                    variant={getButtonVariant("/")}
                    size="evenPad"
                    title="Home"
                    className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full"
                >
                    <Link href="/">
                        <div className="bg-primary-foreground rounded-full flex justify-center items-center">
                            <FaHome className="text-foreground p-1.5 w-7 h-7" />
                        </div>
                    </Link>
                </Button>

                <Button
                    asChild
                    variant={getButtonVariant("/posts")}
                    size="evenPad"
                    title="Articles"
                    className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full"
                >
                    <Link href="/posts">
                        <div className="bg-primary-foreground rounded-full flex justify-center items-center">
                            <FaList className="text-foreground p-2 w-7 h-7" />
                        </div>
                    </Link>
                </Button>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
                {/* <Button
                    asChild
                    variant={getButtonVariant("/user")}
                    size="evenPad"
                    title="User"
                    className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full"
                >
                    <Link href="/login">
                        <div className="bg-primary-foreground rounded-full flex justify-center items-center">
                            <FaUser className="text-foreground p-2 w-7 h-7" />
                        </div>
                    </Link>
                </Button> */}

                <ThemeToggle blurUponScroll={true} />
            </div>
        </div>
    );
};

export default Navbar;
