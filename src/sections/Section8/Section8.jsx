import React from "react";
import "./Section8.css";

const Section8 = ({ onNavigate }) => {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="section8">
      <div className="section8-left">
        <img className="final-logo" src="./Mobile-logo.png" />
        <p>
          At Rai Arts Initiative, our mission is to equip aspiring dancers with
          the essential business knowledge and skills needed to navigate a
          successful and sustainable career in dance.
        </p>
        {/* <p style={{fontSize:'14px'}}>© 2025 RAI Arts Initiative. All rights reserved.
        </p> */}
      </div>
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
      <div className="mobile-only">
        <p>
          At Rai Arts Initiative, our mission is to equip aspiring dancers with
          the essential business knowledge and skills needed to navigate a
          successful and sustainable career in dance.
        </p>
        
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
        <p style={{fontSize:'14px', marginTop:'2rem'}}>© 2025 RAI Arts Initiative. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Section8;
