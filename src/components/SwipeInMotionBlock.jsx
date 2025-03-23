"use client";

import { motion, AnimatePresence } from "motion/react";
import { useId } from "react";

const SwipeInMotionBlock = ({ children, isVisible = true }) => {
    const id = useId();

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, x: 5 }}
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
