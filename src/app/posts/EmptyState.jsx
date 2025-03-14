const EmptyState = () => (
    <div className="flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">No Articles Found</h2>
        <p className="text-foreground mb-6">
            There are no articles published at the moment. Check back soon!
        </p>
        <a href="/" className="text-primary hover:underline">
            Back to Home
        </a>
    </div>
);

export default EmptyState;
