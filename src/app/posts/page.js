import { supabase } from "@/utils/initSupabase";
import Tray from "@/components/Tray";
import React from "react";

const fetchArticles = async () => {
    const { data: articles, error } = await supabase.from("article").select();

    if (error) {
        console.error("Error fetching posts:", error);
        return [];
    }

    return articles;
};

const UserPosts = async () => {
    const fetchedArticles = await fetchArticles();

    // TODO remove this once we populate with enough actual articles
    const newArticles = Array(4)
        .fill(null)
        .flatMap((_, i) =>
            fetchedArticles.map((article) => ({
                ...article,
                slug: `${article.slug}-${i}`, // Ensure uniqueness
            }))
        );

    const articles = [...fetchedArticles, ...newArticles];

    return (
        <div>
            <Tray articles={articles} />
        </div>
    );
};

export default UserPosts;
