import * as motion from "motion/react-client";

const SpringMotionBlock = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
            }}
        >
            {children}
        </motion.div>
    );
};

export default SpringMotionBlock;
