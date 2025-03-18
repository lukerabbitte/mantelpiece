"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";
import ArticleCard from "@/components/ArticleCard";

const Tray = ({ articles }) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {articles.map((article) => (
                <Link key={article.id} href={`/posts/${article.hash_id}/${article.slug}`}>
                    {article.pinned === false ? (
                        <ArticleStrip article={article} />
                    ) : (
                        <div className="col-span-2 grid grid-cols-subgrid gap-4">
                            <ArticleCard article={article} />
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default Tray;
