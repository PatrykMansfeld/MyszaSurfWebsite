import Logo_Poziom from "../../assets/Logo_Poziom.jpg";
import Instagram_Icon from "../../assets/Instagram_Icon.svg";
import Fb_Icon from "../../assets/Fb_Icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-box">
      <div className="logo">
        <img className="logo_img" src={Logo_Poziom} alt="logo" />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`navigation ${menuOpen ? 'open' : ''}`}>
        <ul className="navigation-list">
          <li><a className="navigation-text" href="#Cennik">Zespół</a></li>
          <li><a className="navigation-text" href="#">Cennik</a></li>
          <li><a className="navigation-text" href="#">Kontakt</a></li>
        </ul>
        <div className="socials">
          <a href="#instructors" className="social-list">
            <img className="Fb_Icon" src={Fb_Icon} alt="facebook" />
          </a>
          <a href="#team" className="social-list">
            <img className="Insta_Icon" src={Instagram_Icon} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;