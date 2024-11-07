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

    const handleFasterMovingText = (fasterMovingText, maxOffset) => {
      fasterMovingText.forEach((text) => {
        const offset = Math.min(window.scrollY * 1.05, maxOffset);
        text.style.transform = `translateY(-${offset}px)`;
      });
    };

    const handleScroll = () => {
      const letters = document.querySelectorAll(".parallax-letter");
      const fasterMovingText = document.querySelectorAll(".faster-moving-text");
      const klimtBg = document.querySelector(".bg-klimt-pattern");
      const maxOffset = klimtBg.offsetHeight;

      handleLetters(letters);
      handleFasterMovingText(fasterMovingText, maxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-bold p-2 h-3/4 lg:h-96 ml-auto break-words place-content-end -tracking-tighter">
          {"Caroline Kelly".split("").map((char, index) => (
            <span
              key={index}
              className="parallax-letter inline-block transition-all duration-200 ease-in-out"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="relative w-full h-96 p-4 items-center place-self-start place-content-center top-0 z-0">
          <div className="absolute inset-0 bg-klimt-pattern filter blur-lg"></div>
        </div>
        <div className="faster-moving-text z-30">
          <div className="flex flex-row p-4 mt-6 items-center rounded-md w-1/2 h-36 backdrop-blur-xl border-2 border-muted-foreground">
            <p className="text-4xl text-yellow-50">Check out my articles <a href="/posts">here</a>?</p>
          </div>
        </div>
        <div className="faster-moving-text z-30">
          <div className="flex flex-row p-4 ml-auto items-center rounded-md w-1/2 h-36 backdrop-blur-xl border-2 border-muted-foreground">
            <p className="text-4xl text-yellow-50">Sure thing babe ❤️</p>
          </div>
        </div>
        <h1 className="text-4xl text-yellow-50">
          Dublin-based journalist gifted in the art of telling things how they
          are
        </h1>
        <h1 className="text-4xl text-yellow-50">
          Dublin-based journalist gifted in the art of telling things how they
          are
        </h1>
        <h1 className="text-4xl text-yellow-50">
          Dublin-based journalist gifted in the art of telling things how they
          are
        </h1>
        <h1 className="text-4xl text-yellow-50">
          Dublin-based journalist gifted in the art of telling things how they
          are
        </h1>
      </div>
    </main>
  );
}
