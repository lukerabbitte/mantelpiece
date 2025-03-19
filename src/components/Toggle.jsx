"use client";
import React, { useEffect, useState } from "react";

const Toggle = ({
    id,
    name,
    checked,
    onChange,
    icon1: Icon1,
    icon2: Icon2,
    small,
    blurUponScroll,
}) => {
    const [toggleBlurred, setToggleBlurred] = useState(false);

    useEffect(() => {
        if (blurUponScroll) {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setToggleBlurred(true);
                } else {
                    setToggleBlurred(false);
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [blurUponScroll]);

    // Actuate toggle if spacebar pressed
    const handleKeyPress = (e) => {
        if (e.keyCode !== 32) return;

        e.preventDefault();
        onChange(!checked);
    };

    return (
        <div className={`relative inline-block ${small ? "w-10" : "w-16"}`}>
            <input
                type="checkbox"
                name={name}
                className="hidden"
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            {id && (
                <label
                    className="block overflow-hidden cursor-pointer rounded-full border-0"
                    tabIndex={1}
                    onKeyDown={handleKeyPress}
                    htmlFor={id}
                >
                    <span
                        className={`flex items-center justify-around w-[200%]
                          ${checked ? "ml-0" : "ml-[-100%]"}
                          ${small ? "h-5" : "h-10"}
                          transition-all duration-1000 ease-in-out`}
                    >
                        <span
                            className={`flex items-center justify-start w-1/2 text-xs text-white box-border transition-all duration-400 ease-in-out
                              ${small ? "h-5" : "h-10"}
                              ${
                                  toggleBlurred
                                      ? "bg-slate-500/20 backdrop-blur-sm"
                                      : "bg-primary backdrop-blur-none"
                              }`}
                        />
                        <span
                            className={`flex items-center justify-end w-1/2 text-xs text-white box-border transition-all duration-400 ease-in-out
                              ${small ? "h-5" : "h-10"}
                              ${
                                  toggleBlurred
                                      ? "bg-slate-500/20 backdrop-blur-sm"
                                      : "bg-primary backdrop-blur-none"
                              }`}
                        />
                    </span>

                    <span
                        className={`block absolute top-0 bottom-0 ${
                            checked ? "right-0" : small ? "right-5" : "right-6"
                        } ${
                            small ? "w-4 h-4 m-0.5" : "w-7 h-7 m-1.5"
                        } bg-primary-foreground rounded-full transition-all duration-400 ease-in-out`}
                    >
                        <div
                            className={`block absolute top-1.5 right-1.5 max-w-full max-h-full text-foreground`}
                        >
                            {small ? null : checked ? <Icon2 /> : <Icon1 />}
                        </div>
                    </span>
                </label>
            )}
        </div>
    );
};

export default Toggle;
