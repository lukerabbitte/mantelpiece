import React from "react";

const NiceDate = ({ articleTimestampz }) => {
    const articleDate = new Date(articleTimestampz);

    const articleDay = String(articleDate.getUTCDate()).padStart(2, "0");
    const articleMonth = new Intl.DateTimeFormat("en-US", {
        month: "short",
        timeZone: "UTC",
    }).format(articleDate);
    const articleYear = articleDate.getUTCFullYear() % 100;

    return (
        <time dateTime={articleDate.toISOString()} className="relative">
            <div className="flex flex-col items-center justify-center p-6 aspect-square rounded-full bg-primary font-bold text-primary-foreground">
                <div className="relative">
                    <abbr className="relative" aria-label="Month">
                        {articleMonth}
                    </abbr>
                    <span className="absolute bottom-5 right-5" aria-label="Day">
                        {articleDay}
                    </span>
                    <span className="absolute top-4 left-5" aria-label="Year">
                        {articleYear}
                    </span>
                </div>
            </div>
        </time>
    );
};

export default NiceDate;
