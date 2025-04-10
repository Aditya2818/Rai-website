import React, {forwardRef} from 'react'
import "./Section3.css"
import workshops from './Workshops';
import Button from '../../components/Button/Button';

const Section3 = forwardRef(({ onNavigate }, ref) => {
  return (
    <div ref={ref} className="section3">
      <img className='section3-gradient1' src="light_green_gradient.png"/>
      <img className="section3-small-circle" src="dark_small_circle.png"/>
      <img className="section3-large-circle" src="dark_large_circle.png"/>
      <img className="section3-large-circle-2" src="dark_large_circle.png"/>
      <img className='section3-gradient2' src="light_green_gradient.png"/>
      <img className='section3-gradient3' src="light_green_gradient.png"/> 
        <div className="section3-top-img">
        <img className="section3-ellipse" src="./Ellipse.png"/>
        <img className="section3-profile-img" src="./quote.png"/>
        </div>
       
        <div className="section3-heading"> 
        <img className='section3-layer' src="./Layer_2.png"/>
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
        <Button behaviour={onNavigate.toSection6}  text={"Enroll in a workshop"} variant='gradient' className={"sec-3-btn"}/>
          </div>
    </div>
  )

})

export default Section3;
