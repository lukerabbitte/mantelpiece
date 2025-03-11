"use client";

import React, { useState, useEffect } from "react";
import ArticleStrip from "@/components/ArticleStrip";
import { Masonry } from "masonic";

const Tray = ({ articles }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {!articles ? (
                <div>
                    <p className="text-center text-lg">Loading...</p>
                </div>
            ) : (
                <Masonry
                    items={articles}
                    columnGutter={16}
                    columnWidth={300}
                    render={ArticleStrip}
                />
            )}
        </div>
    );
};

export default Tray;
