"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";
import ArticleCard from "@/components/ArticleCard";

const Tray = ({ articles }) => {
    const pinnedArticles = articles.filter((article) => article.pinned);

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pinnedArticles &&
                pinnedArticles.length > 0 &&
                pinnedArticles.map((article) => (
                    <Link
                        className="min-h-96 lg:row-span-3"
                        key={article.id}
                        href={`/posts/${article.hash_id}/${article.slug}`}
                    >
                        <ArticleCard article={article} />
                    </Link>
                ))}
            {articles.map((article) => (
                <Link key={article.id} href={`/posts/${article.hash_id}/${article.slug}`}>
                    <ArticleStrip article={article} />
                </Link>
            ))}
        </div>
    );
};

export default Tray;
