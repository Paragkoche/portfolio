"use client";
import "@/scss/ui/loader.scss";
import { AnimatePresence, Variants, motion } from "framer-motion";
import gsap from "gsap";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CustomEase } from "gsap/all";
import { useRouter } from "next/navigation";

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
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
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

const InternalPageLoading = (props: {
  text: string;
  next: string;
  active: boolean;
  setActive: (val: boolean) => void;
  href: string;
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const ths = useRef<HTMLParagraphElement>(null);
  const NextRef = useRef<HTMLParagraphElement>(null);
  const loader = useRef<HTMLElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (props.active) {
      const tl = gsap.timeline();
      tl.set(ths.current, { opacity: 1 })
        .to(ths.current, {
          opacity: 0,
          duration: 1,
          onComplete() {
            (ths.current?.style as any).display = "none";
          },
        })
        .set(circle.current, {
          width: 0,
          height: 0,
          // duration: 0.5,
        })
        .to(circle.current, {
          width: "2000vh",
          height: "2000vh",
          duration: 1,
        })
        .set(NextRef.current, {
          opacity: 0,
          // duration: 0.5,
        })
        .to(NextRef.current, {
          opacity: 1,
          duration: 1,
        })
        .set(circle.current, {
          width: "2000vh",
          height: "2000vh",
          duration: 1,
        })
        .to(circle.current, {
          width: 0,
          height: 0,
          duration: 1,

          onComplete() {
            props.setActive(false);
            router.push(props.href);
          },
        });
    }
    // tl.set(circle.current, { width: "200vw", height: "200vh" }).to(
    //   circle.current,
    //   {
    //     height: 0,
    //     width: 0,
    //      duration: 1,
    //     stagger: 0.2,
    //     // ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
    //     onComplete() {},
    //   }
    // );
  }, [props.active]);
  return (
    props.active && (
      <section id="loader" ref={loader}>
        {/* <AnimatePresence mode="wait"> */}
        <div className="internal-screen">
          <div className="cont">
            <div className="circle" ref={circle}></div>
            <div>
              <p ref={ths} style={{ color: "white" }}>
                {props.text}
              </p>
              <p ref={NextRef}>{props.next}</p>
            </div>
          </div>
        </div>
        {/* </AnimatePresence> */}
      </section>
    )
  );
};

const LoadingContext = createContext<{
  goto: (corr: string, next: string, href: string) => void;
}>({ goto() {} });

export const useLoading = () => useContext(LoadingContext);
export const LoadingProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [itFirstTime, setItFirstTime] = useState<boolean>(true);
  const [next, setNext] = useState<string>("");
  const [priv, setPriv] = useState<string>("");
  const [href, setHref] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
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

  const goto = (corr: string, next: string, href: string) => {
    setPriv(corr);
    setNext(next);
    setHref(href);
    setActive(true);
  };

  return (
    <LoadingContext.Provider value={{ goto }}>
      {itFirstTime ? (
        <FistTimeLoading isLoading={isLoading} />
      ) : (
        <InternalPageLoading
          text={priv}
          next={next}
          active={active}
          setActive={setActive}
          href={href}
        />
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};
