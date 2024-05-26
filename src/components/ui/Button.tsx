import GsapMagnetic from "@/hook/MagneticEffect";
import "@/scss/ui/Button.style.scss";
import React from "react";
const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <GsapMagnetic>
      <button className={`btn ${props.className}`} {...props}>
        <span className="btn-child">{props.children}</span>
      </button>
    </GsapMagnetic>
  );
};

export default Button;
