"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";

const Tray = ({ articles }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {!articles ? (
                <div>
                    <p className="text-center text-lg">Loading...</p>
                </div>
            ) : (
                <ul className="w-full grid gap-4 grid-cols-3">
                    {articles.map((article) => (
                        <li key={article.slug}>
                            <Link key={article.slug} href={`/posts/${article.slug}`}>
                                <ArticleStrip article={article} />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tray;
