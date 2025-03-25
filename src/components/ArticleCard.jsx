import React, { useState } from "react";
import Image from "next/image";
import CategoryBadge from "@/components/CategoryBadge";
import { makeDateReadable } from "@/utils/makeDateReadable";
import SwipeInMotionBlock from "@/components/SwipeInMotionBlock";
import SpringMotionBlock from "@/components/SpringMotionBlock";
import { getImageWithFallback } from "@/utils/getImageWithFallback";
import { FaArrowRight, FaThumbtack } from "react-icons/fa";

const ArticleCard = ({ article }) => {
    const [showArrow, setShowArrow] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    if (!article) {
        return <div className="rounded-xl bg-muted h-full animate-pulse"></div>;
    }

    return (
        <div
            className={`relative flex flex-col h-full bg-radial-gradient rounded-xl cursor-pointer transition-all duration-400 overflow-hidden`}
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
        >
            <div className="relative h-full mx-4 mt-4 overflow-hidden rounded-md">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-slate-500/20 animate-pulse flex items-center justify-center">
                        <span className="sr-only">Loading image...</span>
                    </div>
                )}
                <Image
                    src={getImageWithFallback(article.image)}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt={article.title || "Article image"}
                    className={`object-cover transition-opacity duration-400 ease-out ${
                        imageLoaded ? "opacity-100" : "opacity-40"
                    }`}
                    priority={true}
                    onLoadingComplete={() => setImageLoaded(true)}
                />
            </div>

            {article.pinned && (
                <div className="absolute top-0 left-0 m-4">
                    <div className="p-2 rounded-full w-fit backdrop-blur-sm text-primary-foreground text-xs">
                        <div className="flex flex-row items-center gap-2 p-2 rounded-full bg-primary">
                            <span className="inline-block place-self-center text-center">
                                <FaThumbtack />
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full flex flex-col gap-1 pt-2 px-4 pb-4 rounded-b-xl">
                <h1 className="text-[clamp(18px,2vw,22px)] leading-tight text-primary font-bold">
                    {article.title}
                    <span className="inline-block ml-2 text-sm w-4">
                        <SwipeInMotionBlock isVisible={showArrow}>
                            <FaArrowRight />
                        </SwipeInMotionBlock>
                    </span>
                </h1>
                <div className="w-full text-card-foreground">
                    <p className="text-[clamp(16px,1vw,22px)] line-clamp-2">{article.excerpt}</p>
                </div>
                {/* <div className="flex flex-row items-center place-self-end gap-2 bg-slate-500/20 rounded-xl p-1.5">
                    <div className="flex flex-row gap-2 align-middle text-card-foreground text-[clamp(10px,0.8vw,16px)]">
                        <p>{makeDateReadable(article.written_at)}</p>
                    </div>
                    <CategoryBadge category={article.category} />
                </div> */}
            </div>
        </div>
    );
};

export default ArticleCard;
