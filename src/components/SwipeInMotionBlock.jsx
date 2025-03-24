"use client";

import { motion, AnimatePresence } from "motion/react";
import { useId } from "react";

const SwipeInMotionBlock = ({ children, isVisible = true, vertical = false }) => {
    const id = useId();

    let initial = { opacity: 0, scale: 0, x: -10 };
    let animate = { opacity: 1, scale: 1, x: 0 };

    if (vertical) {
        initial = { opacity: 0, scale: 0, y: -10 };
        animate = { opacity: 1, scale: 1, y: 0 };
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key={id}
                    initial={initial}
                    animate={animate}
                    transition={{
                        duration: 0.2,
                        scale: { type: "spring", visualDuration: 0.1, bounce: 0.1 },
                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SwipeInMotionBlock;
