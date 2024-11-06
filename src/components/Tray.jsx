"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTh, FaBars } from "react-icons/fa";
import Toggle from "@/components/Toggle";
import ArticleCard from "@/components/ArticleCard";
import ArticleStrip from "@/components/ArticleStrip";

const Tray = ({ articles }) => {
  const [cardViewingMode, setCardViewingMode] = useState("vertical"); // small horizontal card or larger vertical card

  const colorPalette = ["#379392", "#4fb0c6", "#4f86c6", "#744fc6"];

  const toggleCardViewingModeChange = (checked) => {
    setCardViewingMode(checked ? "horizontal" : "vertical");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-end items-center gap-4">
        <Toggle
          id="cardViewingModeToggle"
          checked={cardViewingMode === "horizontal"}
          onChange={toggleCardViewingModeChange}
          icon1={FaTh}
          icon2={FaBars}
        />
      </div>
      <div
        className={`grid ${
          cardViewingMode === "vertical"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
        } gap-4`}
      >
        {articles.map((article) =>
          cardViewingMode === "vertical" ? (
            <Link href={`/posts/${article.id}`}>
              <ArticleCard
                key={article.id}
                article={article}
                colorPalette={colorPalette}
              />
            </Link>
          ) : (
            <Link href={`/posts/${article.id}`}>
              <ArticleStrip
                key={article.id}
                article={article}
                colorPalette={colorPalette}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Tray;
