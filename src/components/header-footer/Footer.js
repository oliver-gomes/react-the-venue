import React from "react";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
      </Fade>
      <div className="footer_copyright">The Venue 2018</div>
    </footer>
  );
};

export default Footer;
