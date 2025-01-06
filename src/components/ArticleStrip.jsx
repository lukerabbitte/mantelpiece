import React from 'react';
import Image from 'next/image';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import BadgesHolder from '@/components/BadgesHolder';
import { makeDateReadable } from '@/utils/makeDateReadable';

const ArticleStrip = ({ article }) => {
    const articleBadges = [
        { icon: FaNewspaper, text: article.publisher }
    ];

    return (
        <div className="flex flex-row min-h-48 md:min-h-24 bg-card rounded-xl gap-2 cursor-pointer">
            <div className="relative flex-shrink-0 w-1/4 min-w-28 min-h-16">
                <Image
                    src={article.image}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"
                    className="rounded-xl object-cover"
                    priority={true}
                />
                <div className="absolute">
                    <BadgesHolder badges={articleBadges} />
                </div>
            </div>
            <div className="flex flex-col p-2 h-full">
                <h1 className="text-card-foreground font-bold">{article.title}</h1>
                {/* <div className="flex flex-row gap-2 align-middle text-card-foreground text-sm">
                    <p>{makeDateReadable(article.date)}</p>
                </div> */}
                <div className="w-full text-card-foreground">
                    <p>{article.excerpt}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleStrip;