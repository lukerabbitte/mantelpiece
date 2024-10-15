"use client";

import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import Toggle from "@/lib/components/Toggle";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Toggle
      id="theme-toggle"
      name="theme-toggle"
      checked={theme === "dark"}
      onChange={handleChange}
      icon1={FaSun}
      icon2={FaMoon}
      small={false}
    />
  );
};

export default ThemeToggle;