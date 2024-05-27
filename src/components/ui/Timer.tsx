"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useCursor } from "@/Providers/CursorProvider";
import { motion } from "framer-motion";
import { enIN } from "date-fns/locale";
import "@/scss/ui/timer.style.scss";
const text = () => (
  <span
    style={{
      fontSize: "0.8rem",
    }}
  >
    My time Zone
  </span>
);
const Timer = () => {
  const [time, setTime] = useState(new Date());
  const { setHovered } = useCursor();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.p
      className="timer-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      key={format(time, "HH:mm:aaa")}
      onMouseEnter={() => setHovered(true, text())}
      onMouseLeave={() => setHovered(false, "")}
    >
      {format(time, "HH", { locale: enIN })} :{" "}
      {format(time, "mm", { locale: enIN })} :{" "}
      {format(time, "aaa", { locale: enIN }).toUpperCase()} / India
    </motion.p>
  );
};

export default Timer;
