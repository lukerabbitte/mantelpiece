import { supabase } from "@/utils/initSupabase";
import MDXLayout from "@/components/MDXLayout";
import Image from "next/image";
import { makeDateReadable } from "@/utils/makeDateReadable";
import { FaEdit } from "react-icons/fa";

async function getArticle(slug) {
    const { data: article } = await supabase.from("article").select("*").eq("slug", slug).single();

    return article;
}

export default async function ArticlePage({ params }) {
    if (!params.slug) {
        console.error("No slug provided");
        return <div>Article not found</div>;
    }

    const article = await getArticle(params.slug);

    if (!article) {
        console.error(`article not found for slug: ${params.slug}`);
        return <div>Article not found</div>;
    }

    const readableDate = makeDateReadable(article.written_at);

    const handleEditButtonClicked = () => {
        console.log("Editing...");
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="relative w-full justify-center max-w:64 md:max-w:32 min-h-64 sm:min-h-80 md:min-h-56 xl:min-h-80">
                <Image
                    src={article.image}
                    fill
                    sizes="100vw"
                    alt="Image of article"
                    className="rounded-xl object-cover cursor-pointer"
                />
            </div>

            <div className="grid grid-cols-2">
                <h1 className=" text-primary text-lg font-bold">{article.title}</h1>
                <button className="flex flex-row justify-end">
                    <FaEdit className="text-primary" />
                </button>

                <p className="">{article.excerpt}</p>
                <p className="flex flex-row items-end justify-end">{readableDate}</p>
            </div>

            <MDXLayout source={article.content} />
        </div>
    );
}
