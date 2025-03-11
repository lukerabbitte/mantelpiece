import React from "react";
import Image from "next/image";
import { FaNewspaper } from "react-icons/fa";
import Badge from "@/components/Badge";
import { makeDateReadable } from "@/utils/makeDateReadable";
import Link from "next/link";

const ArticleStrip = ({ data: article }) => {
    return (
        <Link href={`/posts/${article.slug}`}>
            <div className="flex flex-row bg-card rounded-xl gap-2 cursor-pointer hover:scale-[100.5%] transition-transform duration-300">
                <div className="relative flex-shrink-0 w-1/3 sm:w-1/4 min-w-28 min-h-16">
                    <Image
                        src={article.image}
                        fill
                        sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                        alt="Image of article"
                        className="rounded-xl object-cover"
                        priority={true}
                    />
                </div>
                <div className="flex flex-col justify-between items-start gap-2 p-2 h-full w-full">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[clamp(14px,2vw,22px)] leading-tight text-balance text-card-foreground font-bold">
                            {article.title}
                        </h1>
                        <div className="w-full text-card-foreground">
                            <p className="text-[clamp(12px,1vw,18px)] line-clamp-2">
                                {article.excerpt}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center place-self-end gap-2">
                        <div className="flex flex-row gap-2 align-middle text-card-foreground text-[clamp(10px,0.8vw,12px)]">
                            <p>{makeDateReadable(article.written_at)}</p>
                        </div>
                        <Badge icon={FaNewspaper} text={article.publisher} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleStrip;
