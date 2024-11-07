"use client";

import "@/app/globals.css";
import { useEffect } from "react";
import { debounce } from "@/utils/debounce";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const letters = document.querySelectorAll(".parallax-letter");
      letters.forEach((letter, index) => {
        const rateOfChange = (index * 1) / letters.length;
        if (window.scrollY === 0) {
          letter.style.transform = "translateY(0)";
          letter.style.opacity = "1";
        } else {
          const offset = window.scrollY * rateOfChange;
          letter.style.transform = `translateY(-${offset}px)`;
          letter.style.opacity = (1 - rateOfChange) * 2;
        }
      });
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl font-bold">
        {"Caroline Kelly".split("").map((char, index) => (
          <span
            key={index}
            className="parallax-letter inline-block transition-transform transition-opacity duration-300 ease-in-out"
          >
            {char}
          </span>
        ))}
      </h1>
    </main>
  );
}
