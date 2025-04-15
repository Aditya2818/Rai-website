import React, { useState, useEffect } from "react";
import "./Nav.css";
import Button from "../../../components/Button/Button";

const Nav = ({ functionality }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionFunction) => {
    sectionFunction();
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    window.open(
      "https://calendly.com/raiartsinitiative/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <div className="section1-nav">
        <img className="section1-nav-middle" src="./logo.png" />
        <div className="section1-nav-left">
          <p onClick={functionality.toSection4}>About RAI</p>
          <p onClick={functionality.toSection3}>Our Workshops</p>
          <p onClick={functionality.toSection6}>Contact us</p>
        </div>

        <Button
          className="book-button"
          variant="gradient"
          text={"Let's Talk"}
          behaviour={handleClick}
        />
      </div>

      {/* Mobile */}
      <div className="section1-nav-mobile">
        <div className="section1-nav-mobile-logo">
          <img className="section1-nav-mobile-logo-img" src="/logo.png" />
        </div>
        <div className="section1-nav-mobile-button">
          <Button
            className="book-button"
            variant="gradient"
            text="Let's talk"
            behaviour={handleClick}
          />
          <div className="hamburger" onClick={toggleMenu}>
            <img className="hamburger-img" src="/Menu Burger Horizontal.png" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="hamburger-menu">
          <div className="hamburger-menu-top">
            <img className="hamburger-menu-top-logo" src="/logo.png" />
            <img
              className="hamburger-menu-top-close"
              src="/close.png"
              onClick={closeMenu}
            />
          </div>
          <div className={`mobile-menu`}>
            <div onClick={() => handleNavClick(functionality.toSection4)}>
              <span>About RAI</span>
            </div>
            <div onClick={() => handleNavClick(functionality.toSection3)}>
              <span>Our Workshops</span>
            </div>
            <div onClick={() => handleNavClick(functionality.toSection6)}>
              <span>Contact us</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
