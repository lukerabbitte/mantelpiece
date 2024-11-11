"use client";

import "@/app/globals.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleLetters = (letters) => {
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

    const handleScroll = () => {
      const letters = document.querySelectorAll(".parallax-letter");

      handleLetters(letters);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <div className="relative min-h-[600vh]">
        <h1 className="text-4xl md:text-8xl border-4 border-red-900 font-bold break-words place-content-end -tracking-tighter fixed bottom-0 w-full">
          {"Caroline Kelly".split("").map((char, index) => (
            <span
              key={index}
              className="parallax-letter inline-block transition-all duration-200 ease-in-out"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
      <div>
        {/* <div>
          <div className="w-full bg-klimt-pattern filter bg-fixed rounded-md blur-md h-96 z-0"></div>
        </div> */}
        <div>
          <p className="text-6xl">
            HELLO
          </p>
        </div>
      </div>
    </main>
  );
}
