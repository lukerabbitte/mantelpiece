"use client";

import React, { useState } from "react";
import { FaTh, FaBars } from "react-icons/fa";
import Toggle from "@/lib/components/Toggle";
import ArticleCard from "@/lib/components/ArticleCard";

const Tray = ({ articles }) => {
    const [cardViewingMode, setCardViewingMode] = useState("vertical"); // small horizontal card or larger vertical card
    
    const toggleCardViewingModeChange = (checked) => {
        setCardViewingMode(checked ? "horizontal" : "vertical");
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-end">
                <Toggle
                    id="cardViewingModeToggle"
                    checked={cardViewingMode === "horizontal"}
                    onChange={toggleCardViewingModeChange}
                    icon1={FaTh}
                    icon2={FaBars}
                />
            </div>
            <div className={`grid ${cardViewingMode === 'vertical' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5'} gap-4`}>
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} cardViewingMode={cardViewingMode} />
                ))}
            </div>
        </div>
    );
};

export default Tray;