"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: ReactNode;
}

export default function GsapMagnetic({ children }: Props) {
  const magnetic = useRef<HTMLElement | null>(null);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const handleMouseEnter = (e: any) => {
    console.log("ok", magnetic.current);

    if (magnetic.current) {
      const button = magnetic.current;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = "ripple";

      button.appendChild(ripple);

      gsap.to(ripple, {
        duration: 0.6,
        scale: 2,
      });
      button.addEventListener("mouseleave", () => {
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        gsap.to(ripple, {
          duration: 0.6,
          scale: 0,
          onComplete: () => {
            ripple.remove();
          },
        });
      });
    }
  };

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      if (magnetic.current?.tagName == "BUTTON")
        magnetic.current?.addEventListener("mouseenter", handleMouseEnter);

      magnetic.current?.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const rect = magnetic.current?.getBoundingClientRect();
        if (rect) {
          const { height, width, left, top } = rect;
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x);
          yTo(y);
        }
      });
      magnetic.current?.addEventListener("mouseleave", (e) => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return children
    ? React.cloneElement(children as React.ReactElement<any>, { ref: magnetic })
    : null;
}
