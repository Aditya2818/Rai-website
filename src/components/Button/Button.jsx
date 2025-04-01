import React from 'react'
import './Button.css'

const Button = ({text, variant = "default"}) => {
  return (
    <button className={`btn ${variant}`}>{text}</button>
  )
}

export default Button