import React, { forwardRef } from "react";
import "./Section4.css";
import Button from "../../components/Button/Button";

const Section4 = forwardRef(({ onNavigate }, ref) => {
  const handleclick = () => {
    window.open(
      "https://calendly.com/raiartsinitiative/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <div ref={ref} className="section4">
      <img className="section4-white-bubble" src="./white_small_circle.png" />
      <img className="section4-white-bubble2" src="./white_large_circle.png" />
      <img className="section4-white-bubble3" src="./white_large_circle.png" />
      <div className="sub-section4">
        <img
          className="sub-section4-img"
          src="./additional professional photo.png"
        />
        <div className="section4-right-content">
          <div className="section4-heading">
            <img className="section4-signal" src="./Layer_2.png" />
            <span className="section4-first-heading">ABOUT </span>
            <span className="section4-second-heading">RAI</span>
          </div>
          <span className="section4-sub-heading">
            Rai Arts Initiative: Bridging the gap{" "}
            <span className="section4-sub-heading next-line">
              between artistry and business
            </span>
          </span>
          <div className="section4-description">
            <p>
              At Rai Arts Initiative, our mission is to equip aspiring dancers
              with the essential business knowledge and skills needed to
              navigate a successful and sustainable career in dance.
            </p>

            <p>
              We fulfill this mission through engaging, hands-on learning
              experiences that offer college dance students the tools and
              confidence they need to navigate the competitive dance industry.
              Our work exposes students to the realities of the dance{" "}
              <b>world beyond the classroom, </b> offering insights into both
              the challenges and opportunities that await them.
            </p>

            <p>
              Whether it’s learning about contracts, grant writing, marketing,
              or career planning, we’re here to guide dancers in{" "}
              <b>
                transforming their passion into a fulfilling and financially
                sustainable profession.
              </b>
            </p>
          </div>
          <div className="section4-btn">
            <Button
              behaviour={handleclick}
              variant="gradient"
              text={"Book a Free Coaching Session"}
              className="section4-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
