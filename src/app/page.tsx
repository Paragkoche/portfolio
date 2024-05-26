"use client";
import { useCursor } from "@/Providers/CursorProvider";
import Button from "@/components/ui/Button";

export default function Home() {
  const { setHovered } = useCursor();
  return (
    <div>
      <p
        onMouseEnter={() => setHovered(true, "text")}
        onMouseMove={() => setHovered(true, "text")}
        onMouseLeave={() => setHovered(false, "")}
      >
        this the
      </p>
      <Button>ok</Button>
    </div>
  );
}
