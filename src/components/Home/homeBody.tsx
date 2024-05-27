"use client";
import { useEffect, useRef } from "react";
import Footer from "../global/footer";
import Sidebar from "../global/sidebar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (bodyRef.current && textRef.current) {
        const scrollTop = e.target.scrollTop; // Get the scroll position
        const maxScroll = e.target.scrollHeight - e.target.clientHeight; // Calculate the maximum scrollable height
        const opacity = scrollTop / maxScroll; // Calculate opacity based on scroll position
        let style = textRef.current.style;
        console.log(textRef);

        style.setProperty("--width", `${opacity * 100}%`);
        console.log(opacity); // Set the opacity of the target element
      }
    };

    if (bodyRef.current) {
      bodyRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [bodyRef, textRef]);
  return (
    <main className="main-body">
      <Sidebar ref={textRef} />
      <div className="content-body" ref={bodyRef}>
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default HomeLayout;
