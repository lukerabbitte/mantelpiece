"use client";

import React, { useState } from "react";
import { FaTh, FaBars, FaMoon, FaSun } from "react-icons/fa";
import Toggle from "@/lib/components/Toggle";
import ArticleCard from "@/lib/components/ArticleCard";
import ArticleStrip from "@/lib/components/ArticleStrip";

const Tray = ({ articles }) => {
    const [cardViewingMode, setCardViewingMode] = useState("vertical"); // small horizontal card or larger vertical card

    const colorPalette = ["17301c","379392","4fb0c6","4f86c6","744fc6"];

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
            <div className={`grid ${cardViewingMode === 'vertical' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5'} gap-4`}>
                {articles.map((article, index) => (
                    cardViewingMode === "vertical" ? (
                        <ArticleCard key={index} article={article} colorPalette={colorPalette} />
                    ) : (
                        <ArticleStrip key={index} article={article} colorPalette={colorPalette} />
                    )
                ))}
            </div>
        </div>
    );
};

export default Tray;