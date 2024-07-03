"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const LandingPage: React.FC = () => {
  const [showLandingPage, setshowLandingPage] = useState(false);

  const handleClick = () => {
    setshowLandingPage(true);
  };

  const gameName = "Hobster";

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

  return (
    <div className={`container ${showLandingPage ? "show-landing" : ""}`}>
      <AnimatePresence>
        {!showLandingPage && (
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
                <motion.span
                  key={index}
                  custom={index}
                  variants={characterVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <div className="clickToStart" onClick={handleClick}>
              Click to Start
            </div>
          </motion.div>
        )}
        {showLandingPage && (
          <motion.div
            className="landing-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="landing-page-text text-center">
              We Don`t Jump <br />
              We <span className="text-blue">Hops!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
