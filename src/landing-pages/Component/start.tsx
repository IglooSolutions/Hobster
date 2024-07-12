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
  const [countdown, setCountdown] = useState(8);

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
    move: (i: number) => ({
      x: i % 2 === 0 ? -400 : 400,
      y: i % 2 === 0 ? -200 : 200,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    }),
  };

  const handleLogoClick = () => {
    setShowLandingPage(true);
  };

  return (
    <motion.div
      className="start-background"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cloudVariants}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`cloud-fragment-${(i % 2) + 1}`}
          variants={cloudVariants}
          custom={i}
          animate="move"
        >
          <Image
            width={100}
            height={100}
            src={`/image/cloud-${(i % 2) + 1}.png`}
            alt={`cloud-${(i % 2) + 1}`}
          />
        </motion.div>
      ))}

      <a className="image-glow landing-page-logo" onClick={handleLogoClick}>
        <Image width={100} height={100} src="/image/logo.svg" alt="logo" />
      </a>
    </motion.div>
  );
};

export default StartScreen;
