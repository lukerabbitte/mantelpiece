import MDXLayout from "@/components/MDXLayout";
import NiceDate from "@/components/NiceDate";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getArticleByHashId } from "@/utils/article/getArticleByHashId";

const ArticlePage = async ({ params }) => {
    const attemptedHashId = params.postId;
    const wildcardSlug = params.slug[0];

    if (!attemptedHashId) {
        notFound();
    }

    const { data: article, error, status } = await getArticleByHashId(attemptedHashId);

    if (error) {
        if (status === 404) {
            notFound();
        } else {
            throw typeof error === "string" ? new Error(error) : error;
        }
    }

    if (!article) {
        notFound();
    }

    // The article path that we expect based on its current slug
    const canonicalPath = `/posts/${article.hash_id}/${article.slug}`;

    // The article path that we have attempted to access via wildcard slug
    const attemptedPath = `/posts/${attemptedHashId}${wildcardSlug ? `/${wildcardSlug}` : ""}`;

    // If we have clicked through to this page based on an old slug, then this will help point us back towards the latest slug
    if (attemptedPath !== canonicalPath) {
        redirect(canonicalPath);
    }

    // TODO how to add suitable canonical metadata to post pages?
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

            <MDXLayout source={article.content} />
        </div>
    );
};

export default ArticlePage;
