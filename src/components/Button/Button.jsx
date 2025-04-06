import React from 'react'
import './Button.css'

const Button = ({text, variant = "default",type}) => {
  return (
    <button type={type} className={`btn ${variant}`}>{text}</button>
  )
}

export default Button