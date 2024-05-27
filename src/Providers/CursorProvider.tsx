"use client";
import "@/scss/ui/cursor.style.scss";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  MutableRefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CursorContext = createContext<{
  isHovered: boolean;
  setHovered: (val: boolean, text: React.ReactNode) => void;
}>({
  isHovered: false,
  setHovered() {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isTouchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in window);
  }, []);
  const [text, setText] = useState<React.ReactNode>(<></>);
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 5 * 16 : 16;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
    scale: 0,
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const manageMouseMove = (e: MouseEvent) => {
    setTouchDevice("ontouchstart" in window);
    const { clientX, clientY } = e;
    // if (!stickyElement || !stickyElement.current) return;
    const { height, width } = { height: 24, width: 24 };

    //center position of the stickyElement
    const center = { x: width / 2, y: height / 2 };

    if (isHovered) {
      //distance between the mouse pointer and the center of the custom cursor and
      //   const distance = { x: clientX - center.x, y: clientY - center.y };

      //   //stretch based on the distance
      //   const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      //   const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      //   const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.scale = 2;

      //move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    } else {
      //move custom cursor to center of stickyElement
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };
  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  const template = ({ rotate, scaleX, scaleY }: any) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  return (
    <CursorContext.Provider
      value={{
        isHovered,
        setHovered(val, text) {
          setText(text);
          setIsHovered(val);
        },
      }}
    >
      {props.children}
      <motion.div
        transformTemplate={template}
        style={{
          display: isTouchDevice ? "none !important" : "flex",
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
          scale: scale.scale,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="cursor"
        ref={cursor}
      >
        <span className="cursor-inner-text">{text}</span>
      </motion.div>
    </CursorContext.Provider>
  );
};
