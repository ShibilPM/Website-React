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

const Work2 = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the-race" />
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="good-times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;

  h2 {
    padding: 1rem 0rem;
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

export default Work2;
