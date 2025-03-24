import Tray from "@/components/Tray";

const Loading = () => {
    const skeletonArticles = [...Array(9)];

    return (
        <div className="flex flex-col gap-16 items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skeletonArticles.map((_, index) => (
                    <div key={index} className="h-[24rem] md:h-[26rem] lg:h-[30rem]">
                        <div className="relative flex flex-col h-full bg-radial-gradient rounded-xl cursor-pointer transition-all duration-400 overflow-hidden animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loading;
