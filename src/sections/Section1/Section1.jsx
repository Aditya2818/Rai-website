import React from "react";
import "./Section1.css";
import Nav from "./Nav/Nav";
import Button from "../../components/Button/Button";

const Section1 = ({ onNavigate }) => {
  const handleClick = () => {
    window.open(
      "https://calendly.com/raiartsinitiative/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="section1">
      <img className="section1-small-circle" src="dark_small_circle.png" />
      <img
        className="section1-gradient-circle"
        src="light_green_gradient.png"
      />
      <img className="section1-large-circle" src="dark_large_circle.png" />
      <img className="section1-large-circle2" src="dark_large_circle.png" />

      <img
        className="section1-gradient-large-circle"
        src="light_green_gradient.png"
      />
      <img className="section1-small-circle-2" src="dark_small_circle.png" />
      <img
        className="section1-gradient-circle-2"
        src="light_green_gradient.png"
      />
      <Nav functionality={onNavigate} />
      <div className="section1-image1">
        <img src="./hero_img.png" />
      </div>
      <div className="section1-div1">
        <div className="section1-div1-first">
          <span style={{ textAlign: "center", margin: "auto" }}>
            Rai Arts Initiative equips aspiring dancers with{" "}
          </span>{" "}
          <br />
          <span style={{ color: "#F9EEB4" }}>
            business knowledge<span style={{ color: "white" }}>,</span>{" "}
            entrepreneurial skills
          </span>
          , &
          <span style={{ color: "#F9EEB4" }} className="confidence">
            {" "}
            confidence
          </span>
          <span className="fstop">.</span>
        </div>

        <div className="section1-div1-second">
          <p className="section1-div1-h1">We help you</p>
          <span className="section1-div1-h2-desktop-only ">
            TRANSFORM YOUR ART INTO{" "}
            <span className=" section1-div1-h2-desktop-only no-space">
              {" "}
              YOUR BUSINESS.
            </span>
          </span>
          <span className="section1-div1-h2-mobile-only ">
            <span>TRANSFORM</span> <span>YOUR ART INTO</span> <span>YOUR</span>
            <span>BUSINESS.</span>
          </span>
          <span className="section1-div1-h2-tablet-only">
            TRANSFORM YOUR
            <br />
            ART INTO YOUR
            <br />
            BUSINESS.
          </span>
        </div>
        <div className="section1-div1-buttons">
          <Button
            className="section1-div1-button1"
            behaviour={onNavigate.toSection3}
            variant="white"
            text="Explore Our Workshops"
          />
          <Button
            behaviour={handleClick}
            variant="gradient"
            text="Book A Free Coaching Session"
            className="section1-div1-button2"
          />
        </div>
      </div>
      <div className="section1-div2">
        {/* Artistry section - top left */}
        <div className="artistry-section">
          <span className="main-title">Artistry</span>
          <div className="sub-item-holder">
            <p className="sub-item">Skill</p>
            <p className="sub-item">Technique</p>
          </div>
          <img className="artistery-layer" src="Layer_1.png" />
        </div>

        {/* Business section - bottom right */}
        <div className="business-section">
          <h2 className="main-title">Business</h2>
          <div className="sub-item-holder-business">
            <p className="sub-item">Marketing</p>
            <p className="sub-item">Fundraising</p>
          </div>
          <img className="business-layer" src="Layer_1.png" />
        </div>
        {/* Connecting arrow */}
        <img
          src="./Arrow_second_section.png"
          alt="Connecting arrow"
          className=""connecting-arrow
        />

        {/* Performer image */}
        <img
          src="./img_second_section.png"
          alt="Performer doing handstand"
          className="performer-image"
        />
      </div>
    </div>
  );
};

export default Section1;
