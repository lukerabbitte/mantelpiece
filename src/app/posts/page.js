import { supabase } from "@/utils/initSupabase";
import Tray from "@/components/Tray";
import React from "react";

const fetchArticles = async () => {
    const { data: articles, error } = await supabase
        .from("article")
        .select();

    if (error) {
        console.error("Error fetching posts:", error);
        return [];
    }

    return articles;
};

const UserPosts = async () => {
    const articles = await fetchArticles();

    console.log("articles", articles);

    return (
        <div>
            <Tray articles={articles} />
        </div>
    );
};

export default UserPosts;
