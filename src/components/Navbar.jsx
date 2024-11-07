"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [buttonVariant, setButtonVariant] = useState("default");

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

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between items-center p-4">
      <div className="flex flex-row gap-4">
        <Button asChild variant={buttonVariant} xs>
          <Link href="/">
            <p className="font-black">
              Home
            </p>
          </Link>
        </Button>

        <Button asChild variant={buttonVariant}>
          <Link href="/posts">
            <p className="font-black">
              Posts
            </p>
          </Link>
        </Button>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
