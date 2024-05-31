"use client";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/scss/home/skill.scss";
import { useEffect, useRef } from "react";

const Skill = () => {
  const section = useRef<HTMLElement>(null);
  const rig = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sec = gsap.utils.toArray(rig.current);
    gsap.fromTo(
      rig.current,
      {
        x: "210vw",
      },
      {
        x: "-350vw",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "3200px bottom",
          scrub: true,
        },
      }
    );
  });
  return (
    <section className="skill-section" ref={section}>
      <div className="right" ref={rig}>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
        <p>parag</p>
      </div>
    </section>
  );
};

export default Skill;
