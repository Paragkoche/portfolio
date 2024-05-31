"use client";
import { motion, useCycle } from "framer-motion";
import Button from "../ui/Button";
import Timer from "../ui/Timer";
import "@/scss/global/header.scss";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useCursor } from "@/Providers/CursorProvider";
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { setHidden } = useCursor();
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ query: `(max-width: ${430 / 16}em)` });
  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   if (!html) return;
  //   html.style.overflow = isOpen ? "hidden" : "initial";
  // }, [isOpen]);

  return (
    <header className="header">
      <motion.div
        className="menu-button"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <div
          onMouseLeave={() => setHidden(false)}
          onMouseEnter={() => setHidden(true)}
          className="toggle-button"
          onClick={() => {
            toggleOpen();
          }}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </div>
        <motion.div
          variants={{
            open: {
              height: isMobile
                ? `calc(100vh - ${55 / 16}rem)`
                : `calc(100vh - ${88 / 16}rem)`,
              width: isMobile ? "100vw" : `calc(99.5vw - ${88 / 16}rem)`,
              transition: {
                duration: 0.75,
              },
            },
            closed: {
              height: "0px",
              width: "0px",
              transition: {
                duration: 0.75,
              },
            },
          }}
          initial={"closed"}
          animate={isOpen ? "open" : "closed"}
          className="menu"
        ></motion.div>
      </motion.div>
      <nav className="header--nav">
        <h1>Parag Koche</h1>
        <div className="header--nav--right">
          <Timer />
          <Button>Contact me</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
