import MarkdownEditor from "@/components/MarkdownEditor";
import { getArticleByHashId } from "@/utils/article/getArticleByHashId";

const EditPage = async ({ params }) => {
    const currentArticleHashId = params.articleId;
    const currentArticle = await getArticleByHashId(currentArticleHashId);
    const currentArticleMarkdown = currentArticle?.data?.content;

    return (
        <div className="relative flex flex-col gap-4 justify-center items-center min-h-screen-minus-navbar-and-footer">
            <MarkdownEditor initialMarkdown={currentArticleMarkdown} />
        </div>
    );
};

export default EditPage;
