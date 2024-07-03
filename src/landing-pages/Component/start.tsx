import React from "react";
import { motion } from "framer-motion";

interface StartScreenProps {
  gameName: string;
  onClick: () => void;
}

const characterVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const StartScreen: React.FC<StartScreenProps> = ({ gameName, onClick }) => {
  return (
    <motion.div
      className="start-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="gameName"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {gameName.split("").map((char, index) => (
          <motion.span key={index} custom={index} variants={characterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <div className="clickToStart" onClick={onClick}>
        Click to Start
      </div>
    </motion.div>
  );
};

export default StartScreen;
