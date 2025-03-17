const UserArticles = ({ articles = [], isOwnProfile }) => {
    if (!articles || articles.length === 0) {
        return <p className="text-muted-foreground">No articles found.</p>;
    }

    return (
        <ul className="w-full h-full flex flex-col items-center">
            {articles.map((article) => (
                <li key={article.hash_id} className="border-b p-4 w-full max-w-md">
                    <p className="font-semibold">{article.title}</p>
                    {/* //TODO if is own profile then show edit symbol to bring to edit page */}
                </li>
            ))}
        </ul>
    );
};

export default UserArticles;
