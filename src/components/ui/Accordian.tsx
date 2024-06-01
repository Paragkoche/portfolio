"use client";

import "@/scss/ui/accordian.scss";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";
export const accordianDescVarients = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
  },
  exit: {
    height: 0,
  },
};
interface Props {
  data: {
    title: string;
    desc: string;
  }[];
}

const Accordian = ({ data }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const buttonStyles = { display: "flex", justifyContent: "space-between" };

  return (
    <div id="accordion-body">
      {data.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="accordion-cont">
            <div
              className="accordion-header"
              onClick={() => handleToggle(i)}
              style={buttonStyles}
            >
              {item.title}{" "}
              <Button className="accordion-button">
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformOrigin: "center",
                    display: "block",
                    width: 24,
                    height: 24,
                  }}
                >
                  <AiOutlinePlus width={24} height={24} />
                </motion.span>
              </Button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  variants={accordianDescVarients}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="desc">
                    <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
