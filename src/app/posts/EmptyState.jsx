import CtaButton from "@/components/CtaButton";

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center p-4 gap-4 min-h-screen-minus-navbar-and-footer">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold flex flex-row items-center gap-2">
                No articles found!
            </h1>
            <p className="text-balance max-w-prose text-center text-muted-foreground line-clamp-3">
                There were no articles found. Check back later?
            </p>
        </div>
        <CtaButton text="Go Home" href="/" />
    </div>
);

export default EmptyState;
