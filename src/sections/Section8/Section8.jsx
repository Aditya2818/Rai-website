import React from 'react'
import "./Section8.css"

const Section8 = ({onNavigate}) => {
  return (
    <div className="section8">
        <div className="section8-left">
            <img className='final-logo' src='./final-logo.png'/>
            <p>At Rai Arts Initiative, our mission is to equip aspiring dancers with the essential business knowledge and skills needed to navigate a successful and sustainable career in dance.</p>
        </div>
        <div className="section8-center">
            <p className='quick-link'>QUICK LINKS</p>
            <div className="links">
                <p onClick={() => onNavigate.toSection4()}>About RAI</p>
                <p onClick={() => onNavigate.toSection3()}>Our Workshops</p>
                <p onClick={() => onNavigate.toSection6()}>Contact us</p>
            </div>
        </div>
        <div className="section8-right">
        <p className='follow-link'>FOLLOW LINKS</p>
            <div className="icons">
                <img src='./facebook.png'/>
                <img src='./instagram-icon.png'/>
                <img src='./whatsapp.png'/>
                <img src='./youtube.png'/>
            </div>
        </div>
    </div>
  )
}

export default Section8