import "@/scss/home/hero.scss";
import Button from "../ui/Button";
const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_section_header">
        <h1>
          Full Stack <br />
          <span>Web developer</span>
        </h1>
      </div>
      <div className="hero_section_info">
        <p className="hero_section_info_main">
          I'm Parag Koche, a Full Stack Web Developer transforming caffeine into
          dynamic, responsive web applications.
        </p>
        <span></span>
        <Button className="hero_section_info_other">view my work</Button>
      </div>
    </section>
  );
};

export default Hero;
