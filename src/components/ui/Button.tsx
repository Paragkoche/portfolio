"use client";
import GsapMagnetic from "@/hook/MagneticEffect";
import "@/scss/ui/button.style.scss";
import { IoArrowBack } from "react-icons/io5";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useCursor } from "@/Providers/CursorProvider";
const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { setHidden } = useCursor();
  return (
    <GsapMagnetic>
      <button
        {...props}
        className={`btn ${props.className}`}
        onMouseLeave={() => setHidden(false)}
        onMouseEnter={() => setHidden(true)}
      >
        <span className="btn-child">
          <IoArrowBack className="btn-icon" />
          {props.children}
        </span>
      </button>
    </GsapMagnetic>
  );
};

export default Button;
