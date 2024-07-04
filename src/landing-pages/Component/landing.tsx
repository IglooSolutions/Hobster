import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LandingScreen: React.FC = () => {
  return (
    <motion.div
      className="landing-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <center>
        <div className="landing-page-text mt-xl-5">
          Don`t Jump <br />
          We <span className="text-blue">Hops!</span>
        </div>
        <div className="btn landing-page-content mt-xl-2">
          <a href="">Connect World</a>
        </div>
      </center>
      {/* Start Desktop Section */}
      <div className="d-mb-none">
        <div className="corner top-left landing-page-logo">
          <a href="" className="image-glow">
            <img src="/image/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="corner bottom-left landing-page-content">
          <a href="#" className="landing-page-link glow">
            Hops Story
          </a>
          <br />
          <a
            className="landing-page-link landing-page-content glow"
            href="https://docs.google.com/document/d/12flB-zl8DdPh-oXwoK9UIz9oSY6eOK42bqt92Tnn7Y0/edit?usp=sharing"
            target="_blank"
          >
            White Paper
          </a>
        </div>
        <div className="corner bottom-right landing-page-content">
          <img
            src="/image/hops-world.svg"
            alt="hops-world"
            className="game-logo image-glow"
          />
          <img
            src="/image/hops-play.svg"
            alt="hops-play"
            className="game-logo image-glow landing-page-content"
          />
        </div>
        <div className="corner top-right landing-page-content"></div>
      </div>
      {/* Start Mobile Section */}
      <div className="d-xl-none">
        <div
          className="d-flex justify-content-center align-items-center position-absolute"
          style={{
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="row landing-page-content">
            <a href="#" className="landing-page-link glow col">
              Hops Story
            </a>
            <a href="" className="image-glow landing-page-logo col">
              <img src="/image/logo.svg" alt="logo" />
            </a>
            <a
              className="landing-page-link glow col"
              href="https://docs.google.com/document/d/12flB-zl8DdPh-oXwoK9UIz9oSY6eOK42bqt92Tnn7Y0/edit?usp=sharing"
              target="_blank"
            >
              White Paper
            </a>
          </div>
        </div>
        <div className="row corner bottom-right landing-page-content">
          <img
            src="/image/hops-world.svg"
            alt="hops-world"
            className="game-logo image-glow"
          />
          <img
            src="/image/hops-play.svg"
            alt="hops-play"
            className="game-logo image-glow landing-page-content"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LandingScreen;
