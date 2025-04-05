import React from 'react'
import "./Section3.css"
import Card from './Cards/Card';
import workshops from './Workshops';
import Button from '../../components/Button/Button';

const Section3 = () => {
  return (
    <div className="section3">
        <div className="section3-top-img">
        <img className="section3-ellipse" src="./Ellipse.png"/>
        <img className="section3-profile-img" src="./quote.png"/>
        </div>
       <img className='section3-layer' src="./Layer_1.png"/>
        <div className="section3-heading"> 
          <span className="section3-first-heading">OUR EXCLUSIVE </span>
        <span className="section3-second-heading">WORKSHOPS</span>
        </div>
        <div className="section3-grid">
        {workshops.map((workshop, index) => (
        <div key={index} className="workshop-card">
          <div className="icon-container">
            <img src={workshop.icon} className="workshop-icon"></img>
          </div>
          <div className="content-container">
            <h2 className="workshop-title">{workshop.title}</h2>
            <p className="workshop-description">{workshop.description}</p>
          </div>
        </div>
      ))}
        </div>
        <div className="Section3-button">
        <Button  text={"Enroll in a workshop"} variant='gradient'/>
          </div>
    </div>
  )

}

export default Section3;
