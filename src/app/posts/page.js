import Tray from "@/components/Tray";
import React from "react";
import { fetchArticles } from "@/utils/article/fetchArticles";
import EmptyState from "@/app/posts/EmptyState";

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
    const newArticles = Array(20)
        .fill(null)
        .flatMap((_, i) =>
            fetchedArticles.map((article) => ({
                ...article,
                id: `${article.id}-${i}`, // Ensure unique ID
                hash_id: `${article.hash_id}-${i}`, // Ensure unique hash_id
                slug: `${article.slug}-${i}`,
            }))
        );

    const articles = newArticles;

    return (
        <div className="flex flex-col gap-16 items-center">
            <Tray articles={articles} />
        </div>
    );
};

export default UserPosts;
