"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Footer from "../global/footer";
import Sidebar from "../global/sidebar";
import Lenis from "lenis";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
