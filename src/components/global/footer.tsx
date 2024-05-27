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
