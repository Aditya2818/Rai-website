import React from "react";
import "./Cards.css";

const Cards = ({ heading, text, source }) => {
  return (
    <div className="section2-card">
      <p className="section2-card-heading">{heading}</p>
      <p className="section2-card-text">{text}</p>
      <img className="section2-card-image" src={source} />
    </div>
  );
};

export default Cards;
