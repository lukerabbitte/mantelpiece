"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";

const Tray = ({ articles }) => {
    const colorPalette = ["#379392", "#4fb0c6", "#4f86c6", "#744fc6"];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                {articles.map((article) => (
                    <Link href={`/posts/${article.id}`}>
                        <ArticleStrip key={article.id} article={article} colorPalette={colorPalette} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tray;
