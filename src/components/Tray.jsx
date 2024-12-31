"use client";

import React from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";
import { addRequestMeta } from "next/dist/server/request-meta";

const Tray = ({ articles }) => {
    return (
        <div>
            {!articles ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
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
addRequestMeta;

export default Tray;
