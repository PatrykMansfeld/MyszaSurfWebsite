import React from "react";

function Footer() {
  return (
    <div id="contact" className="footer_box">
      <div className="footerList">
        <ul className="footerLinks">
          <li className="footerLinksElement">
            <a href="#home">Home</a>
          </li>
          <li className="footerLinksElement">
            <a href="#cennik">Cennik</a>
          </li>
          <li className="footerLinksElement">
            <a href="#instructors">Products</a>
          </li>
          <li className="footerLinksElement">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="Copyright">
        <h1 className="footer_title">COPYRIGHT © MYSZA SURF 2022</h1>
        <p className="footer_text">
          POWERED BY MOODAGENCY, DEVELOPED BY PATRYK MANSFELD
        </p>
      </div>
    </div>
  );
}

export default Footer;
