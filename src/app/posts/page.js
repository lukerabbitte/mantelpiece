import Tray from "@/components/Tray";
import React from "react";
import { fetchArticles } from "@/utils/article/fetchArticles";
import EmptyState from "@/app/posts/EmptyState";
import SpringMotionBlock from "@/components/SpringMotionBlock";

const UserPosts = async () => {
    const { data: fetchedArticles, error, isEmpty } = await fetchArticles();

    if (error) {
        throw typeof error === "string" ? new Error(error) : error; // This will be caught by the nearest error.js
    }

    // Empty state handling to return a nice UI instead of an empty tray
    if (isEmpty || !fetchedArticles || fetchedArticles.length === 0) {
        return <EmptyState />;
    }

    // TODO remove this once we populate with enough actual articles
    const newArticles = Array(4)
        .fill(null)
        .flatMap((_, i) =>
            fetchedArticles.map((article) => ({
                ...article,
                id: `${article.id}-${i}`, // Ensure unique ID
                hash_id: `${article.hash_id}-${i}`, // Ensure unique hash_id
                slug: `${article.slug}-${i}`,
            }))
        );

    const articles = [...fetchedArticles, ...newArticles];

    return (
        <div className="flex flex-col gap-16 items-center">
            <SpringMotionBlock>
                <h1 className="text-5xl text-balance font-bold">Articles</h1>
            </SpringMotionBlock>
            <Tray articles={articles} />
        </div>
    );
};

export default UserPosts;
