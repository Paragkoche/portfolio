"use client";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Timer from "../ui/Timer";
import "@/scss/global/header.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className="header">
      <div className="menu-button"></div>
      <nav className="header--nav">
        <h1 onClick={() => router.push("/")}>Parag Koche</h1>
        <div className="header--nav--right">
          <Timer />
          <Button
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
