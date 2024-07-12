import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface StartScreenProps {
  gameName: string;
  setShowLandingPage: (show: boolean) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({
  gameName,
  setShowLandingPage,
}) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          setShowLandingPage(true);
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setShowLandingPage]);

  const cloudVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 1.2,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="start-background"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cloudVariants}
    >
      <motion.div className="cloud-fragment-1" variants={cloudVariants} />
      <motion.div className="cloud-fragment-2" variants={cloudVariants} />
      <motion.div className="cloud-fragment-1" variants={cloudVariants} />

      <a href="" className="image-glow landing-page-logo">
        <Image width={100} height={100} src="/image/logo.svg" alt="logo" />
      </a>

      {/* <div className="countdown">{countdown}</div> */}
    </motion.div>
  );
};

export default StartScreen;
