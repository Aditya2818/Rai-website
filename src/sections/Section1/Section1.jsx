import React from "react";
import "./Section1.css";
import Nav from "./Nav/Nav";
import Button from "../../components/Button/Button";

const Section1 = () => {
  return (
    <div className="section1">
      <Nav />
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
            business knowledge, entrepreneurial skills
          </span>
          , &<span style={{ color: "#F9EEB4" }}> confidence</span>.
        </div>

        <div className="section1-div1-second">
          <p className="section1-div1-h1">We help you</p>
          <p className="section1-div1-h2">
            TRANSFORM YOUR ART <br /> INTO YOUR BUSINESS.
          </p>
        </div>
        <div className="section1-div1-buttons">
          <Button variant="white" text="Explore Our Workshops" />
          <Button variant="gradient" text="Book A Free Coaching Session" />
        </div>
      </div>
      <div className="section1-div2">
        {/* Artistry section - top left */}
        <div className="artistry-section">
          <h2 className="main-title">Artistry</h2>
          <p className="sub-item">Skill</p>
          <p className="sub-item">Technique</p>
        </div>

        {/* Business section - bottom right */}
        <div className="business-section">
          <h2 className="main-title">Business</h2>
          <p className="sub-item">Marketing</p>
          <p className="sub-item">Fundraising</p>
        </div>
        {/* Connecting arrow */}
        <img
          src="./Arrow_second_section.png"
          alt="Connecting arrow"
          className="connecting-arrow"
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
