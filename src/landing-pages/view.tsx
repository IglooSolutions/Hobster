"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import StartScreen from "./Component/start";
import LandingScreen from "./Component/landing";

const Main: React.FC = () => {
  const [showLandingPage, setshowLandingPage] = useState(false);

  const handleClick = () => {
    setshowLandingPage(true);
  };

  const gameName = "Hops";

  return (
    <div className={`container ${showLandingPage ? "show-landing" : ""}`}>
      <AnimatePresence>
        {!showLandingPage && (
          <StartScreen gameName={gameName} onClick={handleClick} />
        )}
        {showLandingPage && <LandingScreen />}
      </AnimatePresence>
    </div>
  );
};

export default Main;
