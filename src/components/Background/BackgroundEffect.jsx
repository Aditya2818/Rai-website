import React from 'react'
import "./BackgroundEffect.css"

const BackgroundEffect = ({ showGradient = true, bubbleSrc = null, className = "" }) => {
  return (
    <div className={`background-effect-container ${className}`}>
        {showGradient && <img src="./gradient-circle.png" className="gradient-bg" alt="gradient" />}
        {bubbleSrc && <img src={bubbleSrc} className="bubble-img" alt="bubble" />}
    </div>
  )
}

export default BackgroundEffect