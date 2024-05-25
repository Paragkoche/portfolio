"use client";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import "@/scss/ui/HeaderStyle.scss";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { format } from "date-fns/format";
import { enIN } from "date-fns/locale";
import Button from "./Button";
const variants = {
  enter: (direction: any) => {
    return {
      y: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: any) => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};
const Headers = () => {
  const [time, setTime] = useState(new Date());
  const [scop, animation] = useAnimate<HTMLSpanElement>();
  useEffect(() => {
    let id = setInterval(() => {
      setTime(new Date());
    }, 100);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    animation(0, 500);
  }, [time]);
  return (
    <nav className="nav-bar">
      <MenuButton />
      <header>
        <h1>Parag koche</h1>
        <div className="right">
          <div>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              exit={{ y: 20, opacity: 0, position: "absolute" }}
              animate={{ y: 0, opacity: 1 }}
              key={format(time, "hh")}
            >
              {format(time, "hh")}
            </motion.span>{" "}
            :
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              exit={{ y: 20, opacity: 0, position: "absolute" }}
              animate={{ y: 0, opacity: 1 }}
              key={format(time, "mm")}
            >
              {" "}
              {format(time, "mm")}
            </motion.span>{" "}
            :
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              exit={{ y: 20, opacity: 0, position: "absolute" }}
              animate={{ y: 0, opacity: 1 }}
              key={format(time, "aaaa")}
            >
              {" "}
              {format(time, "aaaa").toUpperCase()}
            </motion.span>{" "}
            <span className="splitter">/</span> India
          </div>
          <Button>Contact me</Button>
        </div>
      </header>
    </nav>
  );
};

export default Headers;
