import React from 'react'
import "./Section2.css"
import Cards from './Cards/Cards'
import Button from '../../components/Button/Button'

const Section2 = ({onNavigate}) => {
  return (
    <div className='section2'>
      <img className='section2-white-bubble' src="./white_small_circle.png"/>
      <img src='./yellow-gradient.png' className='white-gradient'/>
        <div className="section2-top-div">
        
            <div className="section2-heading">
            <img className='section2-signal' src="./Layer_2.png"/>
              <span className="section2-first-heading">THE RAI</span> APPROACH</div>
            <span className="section2-sub-heading">Bridging artistry and business</span>
        </div>
        <div className="section2-mid-div">
            <Cards heading={"Career support beyond technical training"} text={"Just passion and skill are not enough for today’s dance world. Artists need entrepreneurial skills, marketing prowess, & other tools beyond performance to succeed and sustain. We focus on building these."} source={"Profile1.png"}/>
            <Cards heading={"Recognizing difference in experiences"} text={"We acknowledge that each dancer’s story and experience is different, and strive to meet each one of them where they are."} source={"Profile2.png"}/>
            <Cards heading={"Inspiring confidence"} text={"With everything we do, we aim to make dancers feel empowered and confident-in the studio & outside. Fostering their sense of self-worth through powerful knowledge, skills, and tools lies at the heart of our work."} source={"Profile3.png"}/>
        </div>

        <div className='section2-btn'><Button behaviour={onNavigate.toSection4} className="section2-button" variant="gradient" text="Learn more about RAI"/></div>
    </div>
  )
}

export default Section2
