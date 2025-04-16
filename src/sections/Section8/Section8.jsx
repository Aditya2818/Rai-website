import React from "react";
import "./Section8.css";
import "../section1/Nav/Nav.css";

const Section8 = ({ onNavigate }) => {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="section8">
      <div className="section8-left">
        <img className="final-logo" src="./final-logo.png" />
        <p>
          At Rai Arts Initiative, our mission is to equip aspiring dancers with
          the essential business knowledge and skills needed to navigate a
          successful and sustainable career in dance.
        </p>
      </div>
      {/* <div className="section8-form">
        <div className="input-group">
          <label>Email id</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            // onChange={handleChange}
            required
          />
        </div>
      </div> */}
      <div className="section8-center">
        <p className="quick-link">QUICK LINKS</p>
        <div className="links">
          <p onClick={() => onNavigate.toSection4()}>
            <span className="underline-hover">About RAI</span>
          </p>
          <p onClick={() => onNavigate.toSection3()}>
            <span className="underline-hover">Our Workshops</span>
          </p>
          <p onClick={() => onNavigate.toSection6()}>
            <span className="underline-hover">Contact us</span>
          </p>
        </div>
      </div>
      <div className="section8-right">
        <p className="follow-link">FOLLOW US</p>
        <div className="icons">
          <div className="icon">
            <img src="Fb.png" />
          </div>
          <div
            className="icon"
            onClick={() => {
              handleClick(
                "//www.instagram.com/raiartsinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              );
            }}
          >
            {" "}
            <img src="Ig.png" />
          </div>
          <div
            className="icon"
            onClick={() => {
              handleClick("https://api.whatsapp.com/send?phone=18325187747");
            }}
          >
            <img src="Wp.png" />
          </div>
          <div
            className="icon"
            onClick={() => {
              handleClick(
                "https://youtube.com/@raiartsinitative?si=6nqIpZti3sWcmeEq",
              );
            }}
          >
            <img src="YT.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
