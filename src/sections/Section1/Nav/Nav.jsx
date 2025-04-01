import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='section1-nav'>
        <div className="section1-nav-left">
            <p>About RAI</p>
            <p>Our Workshops</p>
            <p>Contact us</p>
        </div>
        <img className="section1-nav-middle" src='./logo.png'/>
        <img className="section1-nav-right" src='./instagram.png'/>
    </div>
  )
}

export default Nav
