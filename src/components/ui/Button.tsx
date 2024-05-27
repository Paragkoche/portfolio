import GsapMagnetic from "@/hook/MagneticEffect";
import "@/scss/ui/button.style.scss";
import { IoArrowBack } from "react-icons/io5";
import React from "react";
const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <GsapMagnetic>
      <button {...props} className={`btn ${props.className}`}>
        <span className="btn-child">
          <IoArrowBack className="btn-icon" />
          {props.children}
        </span>
      </button>
    </GsapMagnetic>
  );
};

export default Button;
