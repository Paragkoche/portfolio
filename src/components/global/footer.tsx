"use client";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import "@/scss/global/footer.scss";
import { useCursor } from "@/Providers/CursorProvider";

const Footer = () => {
  const { setHovered } = useCursor();
  return (
    <footer className="footer">
      <div className="social">
        <div
          className="social-box first"
          onMouseEnter={() =>
            setHovered(
              true,
              <FiFacebook
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            )
          }
          onMouseLeave={() => setHovered(false, "")}
          onClick={() => {
            window.open("https://www.facebook.com/webtech.all", "_black");
          }}
        >
          <FiFacebook />
          <span>Facebook</span>
        </div>
        <div
          className="social-box"
          onMouseEnter={() =>
            setHovered(
              true,
              <AiOutlineInstagram
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            )
          }
          onMouseLeave={() => setHovered(false, "")}
          onClick={() => {
            window.open("https://www.instagram.com/paragkoche__", "_black");
          }}
        >
          <AiOutlineInstagram />
          <span>Instagram</span>
        </div>
        <div
          className="social-box"
          onMouseEnter={() =>
            setHovered(
              true,
              <FiGithub
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            )
          }
          onMouseLeave={() => setHovered(false, "")}
          onClick={() => {
            window.open("https://www.github.com/paragkoche", "_black");
          }}
        >
          <FiGithub />
          <span>Github</span>
        </div>

        <div
          className="social-box last"
          onMouseEnter={() =>
            setHovered(
              true,
              <FiLinkedin
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            )
          }
          onMouseLeave={() => setHovered(false, "")}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/parag-koche-8030841b6",
              "_black"
            );
          }}
        >
          <FiLinkedin />
          <span>Linkedin</span>
        </div>
      </div>
      <div className="extra-links ">
        <p>Parag koche &copy; {new Date().getFullYear()}</p>
        <div>
          <p>Resume</p>
          <p>certificate</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
