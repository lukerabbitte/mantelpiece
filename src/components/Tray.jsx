"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";

const Tray = ({ articles }) => {
    return (
        <div>
            {!articles ? (
                <div>
                    <p className="text-center text-lg">Loading...</p>
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {articles.map((article) => (
                        <Link key={article.id} href={`/posts/${article.id}`}>
                            <ArticleStrip article={article} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tray;
