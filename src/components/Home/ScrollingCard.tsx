"use client";
import "@/scss/home/ScrollingCard.scss";
// import { useScroll } from "framer-motion";
// import { useRef } from "react";
// import Image from "@/components/ui/Images";
import Button from "../ui/Button";
// import Images from "@/components/ui/Images";
import { projects } from "@/data/alldata";
const Card = ({
  title,
  description,
  src,
  link,
  logo,

  i,
}: {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i: number;
  logo: string;
}) => {
  return (
    <div className="cardContainer">
      <div className="card" style={{ top: `${i * 25}px` }}>
        <header className="card_header">
          <div>{title}</div>
          <Button
            onClick={() => {
              window.open(link, "_black");
            }}
            className="emt"
          ></Button>
        </header>
        <div className="card_body">
          <div className="content">{description}</div>
          <div className="image_content">
            <img src={logo} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ScrollingCard() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"],
  // });

  return (
    <section className="main">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            // progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
