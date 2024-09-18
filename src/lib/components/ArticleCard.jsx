import React from 'react';
import Image from 'next/image';
import BadgesHolder from '@/lib/components/BadgesHolder';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';

const ArticleCard = ({ article, cardViewingMode }) => {

    // Define the badges we want to show on ArticleCard
    const articleBadges = [
        { icon: FaNewspaper, text: article.publication },
        { icon: FaCalendarAlt, text: new Date(article.date).toLocaleDateString() }
    ];

    return (
        <div className={`flex ${cardViewingMode==="horizontal" ? "flex-row p-2" : "flex-col p-4"} h-full bg-neutral-50 rounded-sm gap-2`}>
            <div className={`relative ${cardViewingMode==="horizontal" ? "w-1/3 min-h-16" : "w-full min-h-48 flex-grow"}`}>
                <Image
                    src={article.image}
                    fill
                    sizes="100vw, (min-width: 480px) 100vw, (min-width: 640px) 50vw, (min-width: 768px) 50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                    alt="Image of article"  // Add better alt here
                    style={{
                        objectFit: 'cover',
                    }}
                    className="rounded-sm"
                />
            </div>
            <div className="flex flex-col flex-grow gap-4 justify-between">
                <h2 className="font-bold flex-grow">
                    {article.title}
                </h2>
                <BadgesHolder badges={articleBadges} />
            </div>
        </div>
    );
};

export default ArticleCard;