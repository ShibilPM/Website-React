import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Animation
import { motion } from "framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  pageAnimation,
} from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any Photograohy or videography ideas that you have. We
          will take care of you. have proff
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="home image" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
