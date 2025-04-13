import React from "react";
import "./Section8.css";

const Section8 = ({ onNavigate }) => {
  // const [email, setemail] = useState("");

  // const handleChange = (e) => {
  //   setemail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", email);
  // };

//   const handleClick =(link)=>{
//     window.open(link,'_blank','noopener,noreferrer')};
//   };

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
          <p onClick={() => onNavigate.toSection4()}>About RAI</p>
          <p onClick={() => onNavigate.toSection3()}>Our Workshops</p>
          <p onClick={() => onNavigate.toSection6()}>Contact us</p>
        </div>
      </div>
      <div className="section8-right">
        <p className="follow-link">FOLLOW US</p>
        <div className="icons">
        <div className="icon">
            <img src="Fb.png" />
          </div>
          <div className="icon">
            {" "}
            <img src="Ig.png" />
          </div>
          <div className="icon">
            <img src="Wp.png" />
          </div>
          <div className="icon">
            <img src="YT.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
