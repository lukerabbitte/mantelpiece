"use client";

import { useEffect, useState } from "react";
import { useScroll, motion, useSpring } from "framer-motion";

const ArticleScrollBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            id="scroll-indicator"
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-40 origin-left"
            style={{ scaleX }}
        />
    );
};

export default ArticleScrollBar;
