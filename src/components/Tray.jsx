"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import ArticleStrip from "@/components/ArticleStrip";
import { debounce } from "@/utils/debounce";

const getNumCols = (width) => {
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
};

const distributeIntoColumns = (articles, numCols) => {
    if (!articles || articles.length === 0) return [];

    const columns = Array.from({ length: numCols }, () => []);

    articles.forEach((article, index) => {
        columns[index % numCols].push(article);
    });

    return columns;
};

const Tray = ({ articles }) => {
    const [numCols, setNumCols] = useState(1);
    const [isMounted, setIsMounted] = useState(false);

    // Set mounted state and initial numCols after component mounts
    useEffect(() => {
        setNumCols(getNumCols(window.innerWidth));
        setIsMounted(true);
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setNumCols(getNumCols(window.innerWidth));
        };

        const debouncedHandleResize = debounce(handleResize, 50);

        window.addEventListener("resize", debouncedHandleResize);
        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, []);

    // Calculate columns whenever articles or numCols changes
    const columns = useMemo(() => {
        return distributeIntoColumns(articles, numCols);
    }, [articles, numCols]);

    // Don't render anything until mounted
    if (!isMounted) {
        return null; // TODO possibly add skeleton state
    }

    return (
        <div className="w-full flex gap-4">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3">
                    {col.map((article) => (
                        <Link key={article.slug} href={`/posts/${article.slug}`} scroll>
                            <ArticleStrip article={article} />
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Tray;
