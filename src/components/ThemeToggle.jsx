"use client";

import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import Toggle from "@/components/Toggle";

const ThemeToggle = ({ blurUponScroll }) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const isSystemDarkMode = mounted && resolvedTheme === "dark";

    // Return a skeleton before mounting on client
    if (!mounted) {
        return (
            <div className="relative inline-block w-16">
                <div className="bg-primary rounded-full h-10"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-row items-center transition-all duration-400 hover:opacity-90 hover:scale-105">
            <Toggle
                name="theme-toggle"
                checked={isSystemDarkMode}
                onChange={handleChange}
                icon1={FaSun}
                icon2={FaMoon}
                small={false}
                blurUponScroll={blurUponScroll}
            />
        </div>
    );
};

export default ThemeToggle;
