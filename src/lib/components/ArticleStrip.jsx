import React from 'react';
import Image from 'next/image';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import BadgesHolder from '@/lib/components/BadgesHolder';
import ColorHoverText from './ColorHoverText';
import { makeDateReadable } from '@/utils/makeDateReadable';

const ArticleStrip = ({ article, colorPalette }) => {
    const articleBadges = [
        { icon: FaNewspaper, text: article.publication }
    ];

    return (
        <div className="flex flex-row h-full bg-card rounded-xl gap-2 cursor-pointer scale-100 hover:scale-[1.01] duration-200 ease-in-out">
            <div className="relative flex-shrink-0 w-1/4 min-w-28 min-h-16">
                <Image
                    src={article.image}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                />
            </div>
            <div className="flex flex-col p-2">
                <div className="text-card-foreground line-clamp-3">
                    <ColorHoverText text={article.title} colorPalette={colorPalette} />
                </div>
                <div className="flex flex-row gap-2 align-middle text-card-foreground text-sm">
                    <p>{makeDateReadable(article.date)}</p>
                </div>
                <div className="w-full mt-auto pt-1">
                    <BadgesHolder badges={articleBadges} colorPalette={colorPalette} />
                </div>
            </div>
        </div>
    );
};

export default ArticleStrip;