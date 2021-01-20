import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//Images
import athelete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  pageAnimation,
  fade,
  lineAnimation,
  photoAnimation,
  sliderContainer,
  movieContainer,
  slider,
} from "../animation";
import Work2 from "./Work2";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athelete}
              alt="athlete"
            />
          </Hide>
        </Link>
      </Movie>
      <Work2 />
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2.5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1000px) {
    padding: 1rem 1rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    padding-bottom: 4rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 1000;
  opacity: 1000;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
  z-index: 1000;
  opacity: 1000;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
  z-index: 1000;
  opacity: 1000;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
  z-index: 1000;
  opacity: 1000;
`;

export default OurWork;
