import Button from "../ui/Button";
import Timer from "../ui/Timer";
import "@/scss/global/header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="menu-button"></div>
      <nav className="header--nav">
        <h1>Parag Koche</h1>
        <div className="header--nav--right">
          <Timer />
          <Button>Contact me</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
