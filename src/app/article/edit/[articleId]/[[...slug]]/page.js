import MarkdownEditor from "@/components/MarkdownEditor";
import { getArticleByHashId } from "@/utils/article/getArticleByHashId";

const EditPage = async ({ params }) => {
    const currentArticleHashId = params.articleId;
    const currentArticle = await getArticleByHashId(currentArticleHashId);
    const currentArticleMarkdown = currentArticle?.data?.content;

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-xl font-bold">
                <h1>{currentArticle?.data?.title}</h1>
            </div>
            <div className="w-full px-4 flex flex-row justify-center">
                <MarkdownEditor initialMarkdown={currentArticleMarkdown} />
            </div>
        </div>
    );
};

export default EditPage;
