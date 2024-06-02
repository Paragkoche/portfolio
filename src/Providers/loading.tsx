"use client";
import "@/scss/ui/loader.scss";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";

const words = [
  "Hello &#x1F44B;", // 👋
  "Bonjour &#x1F1EB;&#x1F1F7;", // 🇫🇷
  "Ciao &#x1F1EE;&#x1F1F9;", // 🇮🇹
  "Olà &#x1F1F5;&#x1F1F9;", // 🇵🇹
  "やあ &#x1F1EF;&#x1F1F5;", // 🇯🇵
  "Hallå &#x1F1F8;&#x1F1EA;", // 🇸🇪
  "Guten tag &#x1F1E9;&#x1F1EA;", // 🇩🇪
  "नमस्ते &#x1F1EE;&#x1F1F3;", // 🇮🇳
  "Hello &#x1F44B;", // 👋
];

const FistTimeLoading = (props: { isLoading: boolean }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index === words.length - 1) return;

    const timeoutId = setTimeout(() => {
      setIndex(index + 1);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [index]);
  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
      transition: { duration: 4, delay: 0.2 },
    },
  };
  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };
  return (
    <section id="loader">
      <AnimatePresence mode="wait">
        {props.isLoading && (
          <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="loader-container"
          >
            <motion.p
              variants={opacity}
              className=""
              initial="initial"
              animate="enter"
            >
              {/* <span></span> */}
              <span dangerouslySetInnerHTML={{ __html: words[index] }}></span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const InternalPageLoading = (props: {}) => {};

const LoadingContext = createContext<{}>({});

export const useLoading = () => useContext(LoadingContext);
export const LoadingProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [itFirstTime, setItFirstTime] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 4500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (!isLoading) setItFirstTime(false);
    }, 4500 + 100);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{}}>
      {itFirstTime && <FistTimeLoading isLoading={isLoading} />}
      {props.children}
    </LoadingContext.Provider>
  );
};
