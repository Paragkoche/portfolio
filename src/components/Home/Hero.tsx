"use client";
import "@/scss/home/hero.scss";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Hero = () => {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-75%" });

  const animation = {
    initial: { y: "150%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.0075 * i,
      },
    }),
  };
  console.log(isInView);

  return (
    <section className="hero_section" ref={body}>
      <div className="hero_section_header">
        <motion.h1
          custom={0}
          variants={animation}
          initial="initial"
          animate={"enter"}
        >
          Full Stack <br />
          <motion.span
            custom={5}
            variants={animation}
            initial="initial"
            animate={"enter"}
          >
            Web developer
          </motion.span>
        </motion.h1>
      </div>
      <div className="hero_section_info">
        <motion.p
          custom={2}
          variants={animation}
          initial="initial"
          animate={"enter"}
          className="hero_section_info_main"
        >
          I'm Parag Koche, a Full Stack Web Developer transforming caffeine into
          dynamic, responsive web applications.
        </motion.p>
        <span></span>
        <Button className="hero_section_info_other">view my work</Button>
      </div>
    </section>
  );
};

export default Hero;
