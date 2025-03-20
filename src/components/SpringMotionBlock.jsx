"use client";

import { motion, AnimatePresence } from "motion/react";

const SpringMotionBlock = ({ children, isVisible = true, id = "spring-motion" }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
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

export default SpringMotionBlock;
