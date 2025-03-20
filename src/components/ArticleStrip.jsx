import React, { useState } from "react";
import Image from "next/image";
import { FaNewspaper } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Badge from "@/components/Badge";
import { makeDateReadable } from "@/utils/makeDateReadable";
import SpringMotionBlock from "@/components/SpringMotionBlock";
import { getImageWithFallback } from "@/utils/getImageWithFallback";

const ArticleStrip = ({ article }) => {
    const [showArrow, setShowArrow] = useState(false);

    if (!article) {
        return <div className="rounded-xl bg-muted h-full animate-pulse"></div>;
    }

    return (
        <div
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
            className="flex flex-row h-full bg-card rounded-xl gap-2 cursor-pointer transition-all duration-400"
        >
            <div className="relative flex-shrink-0 w-1/3 sm:w-1/4 min-w-28 min-h-16">
                <Image
                    src={getImageWithFallback(article.image)}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"
                    className="rounded-xl object-cover"
                    priority
                />
            </div>
            <div className="flex flex-col justify-between items-start gap-2 p-2 h-full w-full">
                <div className="flex flex-col gap-1">
                    <h1 className="text-[clamp(18px,2vw,22px)] leading-tight text-balance text-primary font-bold">
                        {article.title}
                        <span className="inline-block ml-2 text-sm w-4">
                            <SpringMotionBlock
                                isVisible={showArrow}
                                id={"article-strip-right-arrow-on-hover"}
                            >
                                <FaArrowRight />
                            </SpringMotionBlock>
                        </span>
                    </h1>
                    <div className="w-full text-card-foreground">
                        <p className="text-[clamp(16px,1vw,22px)] line-clamp-2">
                            {article.excerpt}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center place-self-end gap-2 bg-muted rounded-xl p-1.5">
                    <div className="flex flex-row gap-2 align-middle text-card-foreground text-[clamp(10px,0.8vw,16px)]">
                        <p>{makeDateReadable(article.written_at)}</p>
                    </div>
                    <Badge icon={FaNewspaper} text={article.publisher} />
                </div>
            </div>
        </div>
    );
};

export default ArticleStrip;
