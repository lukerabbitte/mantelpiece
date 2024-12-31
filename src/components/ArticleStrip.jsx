import React from 'react';
import Image from 'next/image';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import BadgesHolder from '@/components/BadgesHolder';
import { makeDateReadable } from '@/utils/makeDateReadable';

const ArticleStrip = ({ article }) => {
    const articleBadges = [
        { icon: FaNewspaper, text: article.publication }
    ];

    return (
        <div className="flex flex-row h-36 bg-card rounded-xl gap-2 cursor-pointer scale-100 hover:scale-[1.002] duration-200 ease-in-out">
            <div className="relative flex-shrink-0 w-1/4 min-w-28 min-h-16">
                <Image
                    src={article.image}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"
                    className="rounded-xl object-cover"
                />
                <div className="absolute">
                    <BadgesHolder badges={articleBadges} />
                </div>
            </div>
            <div className="flex flex-col p-2">
                <div className="text-card-foreground font-bold line-clamp-3">{article.title}</div>
                <div className="flex flex-row gap-2 align-middle text-card-foreground text-sm">
                    <p>{makeDateReadable(article.date)}</p>
                </div>
                <div className="w-full mt-auto line-clamp-1 xs:line-clamp-2 lg:line-clamp-3">
                    <p>{article.excerpt}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleStrip;