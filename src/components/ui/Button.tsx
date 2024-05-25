"use client";
import "@/scss/ui/ButtonStyle.scss";
import gsap from "gsap";
import { useRef } from "react";

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (e: any) => {
    if (!buttonRef.current || !spanRef.current) return;
    const button: any = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const ripple = spanRef.current;

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    button.appendChild(ripple);

    gsap.to(ripple, {
      duration: 0.5,
      //   opacity: 1,
      scale: 2,
    });
  };
  const handleMouseLave = () => {
    const ripple = spanRef.current;

    gsap.to(ripple, {
      duration: 0.6,
      //   opacity: 0,
      scale: 0,
    });
  };
  return (
    <>
      <button
        className={`btn ${props.className || ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLave}
        {...props}
        ref={buttonRef}
      >
        <span ref={spanRef}></span>
        <span className="text">{props.children}</span>
      </button>
    </>
  );
};

export default Button;
