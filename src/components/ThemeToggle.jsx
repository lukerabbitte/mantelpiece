"use client";

import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import Toggle from "@/components/Toggle";

const ThemeToggle = ({ blurUponScroll }) => {
    const { theme, setTheme } = useTheme();

    const handleChange = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <div className="transition-all duration-400 hover:opacity-90 hover:scale-105">
            <Toggle
                id="theme-toggle"
                name="theme-toggle"
                checked={theme === "dark"}
                onChange={handleChange}
                icon1={FaSun}
                icon2={FaMoon}
                small={false}
                blurUponScroll
            />
        </div>
    );
};

export default ThemeToggle;
