import { notFound, redirect } from "next/navigation";
import { getArticleByHashId } from "@/utils/article/getArticleByHashId";
import ArticleScrollBar from "./ArticleScrollBar";
import ArticleMDXContent from "./ArticleMDXContent";
import NiceDate from "@/components/NiceDate";
import Image from "next/image";
import { getImageWithFallback } from "@/utils/getImageWithFallback";
import UserAvatarBadge from "@/components/UserAvatarBadge";
import CategoryBadge from "@/components/CategoryBadge";
import { getProfileByUserId } from "@/utils/user/getProfileByUserId";

const ArticlePage = async ({ params }) => {
    const attemptedHashId = params.postId ? params.postId : undefined;
    const wildcardSlug = params.slug ? params.slug[0] : undefined;

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

    const userId = article.author;
    const { data: profile, error: profileError, profileStatus } = await getProfileByUserId(userId);

    // The article path that we expect based on its current slug
    const canonicalPath = `/posts/${article.hash_id}/${article.slug}`;

    // The article path that we have attempted to access via wildcard slug
    const attemptedPath = `/posts/${attemptedHashId}${wildcardSlug ? `/${wildcardSlug}` : ""}`;

    // If we have clicked through to this page based on an old slug, then this will help point us back towards the latest slug
    if (attemptedPath !== canonicalPath) {
        redirect(canonicalPath);
    }

    return (
        <div className="flex flex-col items-center w-full gap-2">
            {/* Client component for scroll tracking */}
            <ArticleScrollBar />

            <div className="max-w-[75ch] space-y-4">
                <div className="h-full bg-radial-gradient overflow-hidden rounded-xl">
                    <div className="relative w-full justify-center">
                        <Image
                            src={getImageWithFallback(article.image)}
                            alt={article.title || "Article image"}
                            width={1200}
                            height={900}
                            sizes="(max-width: 768px) 100vw, 75ch"
                            className="w-full h-auto object-cover object-top"
                            priority
                        />
                    </div>

                    <div className="relative rounded-b-xl p-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4 justify-between">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-primary text-2xl font-black">
                                        {article.title}
                                    </h1>
                                </div>
                                <div className="text-primary place-content-center">
                                    <NiceDate articleTimestampz={article.written_at} />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-sm text-muted-foreground text-balance">
                                        Originally published in{" "}
                                        <a
                                            className="text-foreground underline"
                                            target="_blank"
                                            href={article.publisher_url}
                                        >
                                            {article.publisher}
                                        </a>
                                    </p>
                                </div>
                                <UserAvatarBadge
                                    avatarImage={profile.avatar_url}
                                    displayName={profile.display_name}
                                />
                            </div>

                            <p className="flex flex-row text-card-foreground font-bold">
                                {article.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MDX Content (Server Component) */}
            <ArticleMDXContent source={article.content} />
        </div>
    );
};

export default ArticlePage;
