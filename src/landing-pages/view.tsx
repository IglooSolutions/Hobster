"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./styles.css";
import StartScreen from "./Component/start";
import LandingScreen from "./Component/landing";

const Main: React.FC = () => {
  const [showLandingPage, setShowLandingPage] = useState(false);

  const gameName = "Hops";

  return (
    <div className={`container-fluid ${showLandingPage ? "show-landing" : ""}`}>
      <AnimatePresence>
        {!showLandingPage && (
          <StartScreen
            gameName={gameName}
            setShowLandingPage={setShowLandingPage}
          />
        )}
      </AnimatePresence>
      {showLandingPage && <LandingScreen />}
    </div>
  );
};

export default Main;
