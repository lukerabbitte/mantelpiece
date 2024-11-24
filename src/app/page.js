"use client";

import "@/app/globals.css";
import FloatingText from "@/components/FloatingText";
import BioText from "@/components/BioText";

export default function Home() {
  return (
    <main className="flex flex-col">
      <FloatingText text="Caroline Kelly" />
      <BioText />
    </main>
  );
}
