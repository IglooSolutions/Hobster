"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const Home: React.FC = () => {
  const [showLandingPage, setshowLandingPage] = useState(false);

  const handleClick = () => {
    setshowLandingPage(true);
  };

  return (
    <div className="container">
      <AnimatePresence>
        {!showLandingPage && (
          <motion.div
            className="landing"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="gameName">Hobster</h1>
            <div className="clickToStart" onClick={handleClick}>
              Click to Start
            </div>
          </motion.div>
        )}
        {showLandingPage && (
          <motion.div
            className="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="image/mascots.png"
              alt="Mascot"
              className="mascot"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            />
            <div className="landingContent">Hello Landing Page</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
