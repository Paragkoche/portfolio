import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingTextReveal = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return <div ref={textRef}>{text}</div>;
};

export default ScrollingTextReveal;
