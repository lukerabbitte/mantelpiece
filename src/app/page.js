"use client";

import "@/app/globals.css";
import FloatingText from "@/components/FloatingText";
import BioText from "@/components/BioText";
import CtaCard from "@/components/CtaCard";

export default function Home() {
  return (
      <main className="flex flex-col gap-4">
          <CtaCard text="Articles"/>
          <FloatingText text="Caroline Kelly" />

          <BioText />
      </main>
  );
}
