import React from 'react'
import "./Nav.css"

const Nav = ({functionality}) => {
  return (
    <div className='section1-nav'>
        <div className="section1-nav-left">
            <p onClick={functionality.toSection4}>About RAI</p>
            <p onClick={functionality.toSection3}>Our Workshops</p>
            <p onClick={functionality.toSection6}>Contact us</p>
        </div>
        <img className="section1-nav-middle" src='./logo.png'/>
        <img className="section1-nav-right" src='./instagram.png'/>
    </div>
  )
}

export default Nav
