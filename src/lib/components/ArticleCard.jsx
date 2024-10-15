import React from 'react';
import Image from 'next/image';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import BadgesHolder from '@/lib/components/BadgesHolder';
import ColorHoverText from './ColorHoverText';
import { makeDateReadable } from '@/utils/makeDateReadable';

const ArticleCard = ({ article, colorPalette }) => {
    const articleBadges = [
        { icon: FaNewspaper, text: article.publication },
        { icon: FaNewspaper, text: article.publication }
    ];

    return (
        <div className="h-full bg-card rounded-xl cursor-pointer scale-100 hover:scale-[1.01] duration-200 ease-in-out">
            <div className="relative w-full min-h-72 flex-grow">
                <Image
                    src={article.image}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl"></div>
                <div className="flex flex-col gap-2 p-2 w-full absolute bottom-0">
                    <div className="">
                        <div className="text-neutral-100 line-clamp-3">
                            <ColorHoverText text={article.title} colorPalette={colorPalette} />
                        </div>
                        <div className="flex flex-row gap-2 align-middle text-neutral-200 text-sm">
                            <p>{makeDateReadable(article.date)}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <BadgesHolder badges={articleBadges} colorPalette={colorPalette} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;