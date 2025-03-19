import React, { useState } from "react";
import Image from "next/image";
import { FaNewspaper } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaThumbtack } from "react-icons/fa";
import Badge from "@/components/Badge";
import { makeDateReadable } from "@/utils/makeDateReadable";
import SpringMotionBlock from "@/components/SpringMotionBlock";

const ArticleCard = ({ article }) => {
    const [showArrow, setShowArrow] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
            className="relative flex flex-col h-full bg-accent rounded-xl gap-2 cursor-pointer hover:opacity-90 transition-all duration-400 overflow-hidden"
        >
            <div className="relative w-full h-full">
                <Image
                    src={article.image}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"
                    className="rounded-xl object-cover"
                    priority
                />
            </div>
            <div className="absolute top-0 left-0 m-2">
                <div className="p-2 rounded-xl w-fit backdrop-blur-3xl text-foreground text-xs">
                    <div className="flex flex-row items-center gap-2 p-2 rounded-lg bg-primary-foreground">
                        <span>Pinned</span>
                        <span className="inline-block place-self-center text-center">
                            <FaThumbtack />
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 mx-4 mb-4 backdrop-blur-3xl flex flex-col justify-between items-start gap-2 p-2 rounded-xl h-fit w-fit">
                <div className="flex flex-col gap-1 bg-card p-2 rounded-xl">
                    <h1 className="text-[clamp(18px,2vw,22px)] leading-tight text-balance text-primary font-bold">
                        {article.title}
                        <span class="inline-block ml-2 text-sm w-4">
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
                    <div className="flex flex-row items-center place-self-end gap-2 bg-muted rounded-xl p-1.5">
                        <div className="flex flex-row gap-2 align-middle text-card-foreground text-[clamp(10px,0.8vw,16px)]">
                            <p>{makeDateReadable(article.written_at)}</p>
                        </div>
                        <Badge icon={FaNewspaper} text={article.publisher} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
