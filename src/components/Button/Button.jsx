import React from 'react'
import './Button.css'

const Button = ({text, variant = "default",type,className = "",behaviour}) => {
  return (
    <button onClick={behaviour} type={type} className={`btn ${variant} ${className}`}>{text}</button>
  )
}

export default Button