import {motion} from "framer-motion";

const animations = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
    exit: {opacity: 0, y: -20, transition: {duration: 0.4, ease: "easeIn"}},
};

const PageTransition = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">{children}</motion.div>
    );
};

export default PageTransition;