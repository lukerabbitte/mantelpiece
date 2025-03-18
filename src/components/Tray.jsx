"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";

const Tray = ({ articles }) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {articles.map((article) => (
                <Link key={article.id} href={`/posts/${article.hash_id}/${article.slug}`}>
                    <ArticleStrip article={article} />
                </Link>
            ))}
        </div>
    );
};

export default Tray;
