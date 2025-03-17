import ArticleManager from "@/components/UserArticles";

const DashboardPage = () => {


    // Check if current user
    // This is private route
    // Upon going to /dashboard page, if we are not signed in, then prompt the user to sign in
    // via the /login route
    // If we are already signed in, do a check to see if the user id equals a globally defined
    // user id inidicating the admin of the website who can manage the content
    // If after checking, we determine that the user is not the admin, show a message saying something
    // like "admins only"
    // If the user is the admin, then show the actual article manager with all their articles
    // the ArticleManager component should receive some CRUD functions as props which let us delete
    // articles after showing a modal confirmation.
    // If we click the add article button, it creates an article with the default title "New Article"
    // and brings us to the /edit page, which shows a Markdown editor that we can type our stuff
    // into.
    // This edit page also has an image uploader which lets us select an image from file system
    // or drag and drop. it has a size limit.
    // I suppose then once we hit save on the /edit page layout, it's almost like submitting a form
    // THis submission causes a server action which essentially takes the
    // - title, -written at date (specified by the user), -excerpt, -publisher, -tags, -image_url, content (actual markdonw content present in the editor at the moment of submission, and a unique slug genereated based on the title)

    return (
        <div>
            <ArticleManager articles={articles} />
        </div>
    );
};

export default DashboardPage;
