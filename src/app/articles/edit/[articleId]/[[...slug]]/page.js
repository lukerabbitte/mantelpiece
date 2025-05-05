import MarkdownEditor from "@/components/MarkdownEditor";
import { getArticleByHashId } from "@/utils/article/getArticleByHashId";

const EditPage = async ({ params }) => {
    const currentArticleHashId = params.articleId;
    const currentArticle = await getArticleByHashId(currentArticleHashId);
    console.log("Current article: ", currentArticle);
    const currentArticleMarkdown = currentArticle?.data?.content || "# Hello World";
    console.log("Current article markdown: ", currentArticleMarkdown);

    console.log("BBBBB", currentArticleMarkdown);

    return (
        <div className="">
            <MarkdownEditor initialMarkdown={currentArticleMarkdown} />
        </div>
    );
};

export default EditPage;
