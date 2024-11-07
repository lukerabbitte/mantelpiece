"use client";

import "@/app/globals.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const letters = document.querySelectorAll(".parallax-letter");
      letters.forEach((letter, index) => {
        const rateOfChange = Math.random();
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-bold p-2 h-96 ml-auto break-words place-content-end -tracking-tighter">
          {"Caroline Kelly".split("").map((char, index) => (
            <span
              key={index}
              className="parallax-letter inline-block transition-all duration-200 ease-in-out"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="bg-klimt-pattern w-full lg:w-3/4 h-96 p-4 items-center place-self-start place-content-center">
          <h1 className="p-4 text-4xl text-yellow-50 rounded-md border-2 border-yellow-50">
            Dublin-based journalist
          </h1>
        </div>
        <div></div>
      </div>
    </main>
  );
}
