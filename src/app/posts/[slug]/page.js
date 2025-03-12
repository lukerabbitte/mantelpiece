import { supabase } from "@/utils/initSupabase";
import MDXLayout from "@/components/MDXLayout";
import MarkdownEditor from "@/components/MarkdownEditor";
import NiceDate from "@/components/NiceDate";
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
        <div className="flex flex-col items-center w-full gap-4">
            <div className="max-w-[90%] sm:max-w-[50ch] bg-slate-400/20 rounded-xl">
                <div className="relative w-full justify-center max-w:64 md:max-w:32 h-72 sm:h-80">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={300}
                        priority
                        className="w-full h-full rounded-t-xl object-cover"
                    />
                </div>

                <div className="relative rounded-b-xl p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4 justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-primary text-2xl font-black">
                                    {article.title}
                                </h1>
                            </div>
                            <div className="text-primary place-content-center">
                                <NiceDate articleTimestampz={article.written_at} />
                            </div>
                        </div>

                        <p className="flex flex-row text-card-foreground text-right font-bold">
                            {article.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            {/* TODO only show if logged in user */}
            {/* <button className="flex flex-row justify-end">
                <FaEdit className="text-primary" />
            </button> */}

            <MDXLayout source={article.content} />

            {/* <div className="w-full max-w-full sm:max-w-prose">
                <MarkdownEditor />
            </div> */}
        </div>
    );
}
