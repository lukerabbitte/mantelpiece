"use client";

import React from "react";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

const Tray = ({ articles }) => {
    const pinnedArticles = articles.filter((article) => article.pinned);

    const unpinnedArticles = articles.filter((article) => !article.pinned);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinnedArticles.length > 0 &&
                pinnedArticles.map((article) => (
                    <Link
                        className="h-[30rem]"
                        key={article.id || article.hash_id}
                        href={`/posts/${article.hash_id}/${article.slug}`}
                    >
                        <ArticleCard article={article} isPinned={true} />
                    </Link>
                ))}

            {unpinnedArticles.map((article) => (
                <Link
                    className="h-[30rem]"
                    key={article.id || article.hash_id}
                    href={`/posts/${article.hash_id}/${article.slug}`}
                >
                    <ArticleCard article={article} />
                </Link>
            ))}
        </div>
    );
};

export default Tray;
