import "./navbar.scss";
import logoUrl from "@/assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logoUrl} alt="logo" />
      </div>
      <div className="nav-links">
        <a href="#work" className="nav-link">
          Work
        </a>
        <a href="#about" className="nav-link">
          about
        </a>
        <a href="#blog" className="nav-link">
          blog
        </a>
        <a href="#contact" className="nav-link">
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
