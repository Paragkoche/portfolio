"use client";
import { Skills } from "@/data/alldata";
import "@/scss/home/skill.scss";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

const skill = () => {
  const ref_ = useRef<HTMLDivElement>(null);
  const pp = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref_,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const translateX = useTransform(
    scrollYProgress,
    [150 * -1, -150 * -1],
    [0, 1]
  );

  console.log(image);

  return (
    <section className="skill-cont" ref={ref_}>
      <motion.div style={{ y: translateX }} className="left" ref={pp}>
        {Skills.map((_, i) => (
          <div key={i} className="info-body">
            <p className="info-heading">{_.name}</p>
            <p className="info-dec">{_.desc}</p>
          </div>
        ))}
      </motion.div>
      <div className="right">
        {Skills.map((_, i) => (
          <div
            key={i}
            className="image-cont"
            style={{
              top: `calc(5.4rem + ${i * 50}px)`,
            }}
          >
            <header className="image-header">
              <p>{_.name}</p>
              <Button
                className="emt"
                onClick={() => {
                  window.open(
                    "https://github.com/Paragkoche?tab=repositories",
                    "_black"
                  );
                }}
              />
            </header>
            <div className="image-body">{/* <_.image /> */}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default skill;
