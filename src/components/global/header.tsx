"use client";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import Timer from "../ui/Timer";
import "@/scss/global/header.scss";
import { useLoading } from "@/Providers/loading";

const Header = () => {
  const { goto } = useLoading();
  const path = usePathname();
  return (
    <header className="header">
      <div className="menu-button"></div>
      <nav className="header--nav">
        <h1
          onClick={() =>
            goto(path.split("/").at(-1) == "" ? "Home" : "Contact", "Home", "/")
          }
        >
          Parag Koche
        </h1>
        <div className="header--nav--right">
          <Timer />
          <Button
            onClick={() =>
              goto(
                path.split("/").at(-1) == "" ? "Home" : "Contact",
                "Contact",
                "/contact"
              )
            }
          >
            Contact me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
