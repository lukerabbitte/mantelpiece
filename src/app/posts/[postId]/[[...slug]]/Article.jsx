"use client";

import MDXLayout from "@/components/MDXLayout";
import NiceDate from "@/components/NiceDate";
import Image from "next/image";
import { motion, useSpring, useScroll } from "motion/react";

const Article = ({ article }) => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // TODO how to add suitable canonical metadata to post pages?
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    originX: 0,
                    backgroundColor: "var(--primary)",
                    zIndex: 40,
                }}
            />
            <div className="max-w-[65ch] bg-card rounded-xl">
                <div className="relative w-full justify-center max-w:64 md:max-w:32 h-72 sm:h-80">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={300}
                        priority
                        className="w-full h-full rounded-t-xl object-cover"
                    />
                </div>

                <div className="relative rounded-b-xl p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4 justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-primary text-2xl font-black">
                                    {article.title}
                                </h1>
                            </div>
                            <div className="text-primary place-content-center">
                                <NiceDate articleTimestampz={article.written_at} />
                            </div>
                        </div>

                        <p className="flex flex-row text-card-foreground text-right font-bold">
                            {article.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            <MDXLayout source={article.content} />
        </div>
    );
};

export default Article;
