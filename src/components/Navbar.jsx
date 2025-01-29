"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaList } from "react-icons/fa";
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
        return pathname === path ? "default" : buttonVariant;
    };

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-between items-center p-4">
            <div className="flex flex-row gap-4">
                <Button
                    asChild
                    variant={getButtonVariant("/")}
                    size="evenPad"
                    title="Home"
                    className="transition-all duration-400 hover:opacity-90 hover:scale-105"
                >
                    <Link href="/">
                        <div className="bg-primary-foreground rounded-md flex justify-center items-center">
                            <FaHome className="text-foreground p-[0.6em] w-9 h-9" />
                        </div>
                    </Link>
                </Button>

                <Button
                    asChild
                    variant={getButtonVariant("/posts")}
                    size="evenPad"
                    title="Articles"
                    className="transition-all duration-400 hover:opacity-90 hover:scale-105"
                >
                    <Link href="/posts">
                        <div className="bg-primary-foreground rounded-md flex justify-center items-center">
                            <FaList className="text-foreground p-[0.7em] w-9 h-9" />
                        </div>
                    </Link>
                </Button>
            </div>

            <div>
                <ThemeToggle blurUponScroll />
            </div>
        </div>
    );
};

export default Navbar;
