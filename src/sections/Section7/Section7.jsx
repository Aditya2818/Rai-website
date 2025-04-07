import React from "react";
import "./Section7.css";
import TestimonialCarousel from "./TestimonialCarousel";



const Section7 = () => {
  return (
    <div className="section7">
        
      <div>
        <span className="section7-heading1">Hear From</span>
        <img className='section7-signal' src="./Layer_2.png"/>
        <span className="section7-heading2">
            <span className="section7-heading2-text1">OUR </span>
            <span className="section7-heading2-text2">CLIENTS</span>
        </span>
      </div>
     <TestimonialCarousel/>
    
     {/* <img className="section7-gradient-circle-1" src="light_green_gradient.png"/>
     <img className="section7-gradient-circle-2" src="light_green_gradient.png"/> */}


    </div>
  );
};

export default Section7;
