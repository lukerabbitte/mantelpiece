import { notFound, redirect } from "next/navigation";
import { getArticleByHashId } from "@/utils/article/getArticleByHashId";
import Article from "@/app/posts/[postId]/[[...slug]]/Article";

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

    return <Article article={article} />;
};

export default ArticlePage;
