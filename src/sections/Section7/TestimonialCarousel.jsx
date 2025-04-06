import React, { useState } from "react";
import "./Carousel.css";
import testimonials from "./Testimonials";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getCardClass = (index) => {
    if (index === activeIndex) return "testimonial-card active";
    if (index === (activeIndex + 1) % testimonials.length)
      return "testimonial-card right";
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length)
      return "testimonial-card left";
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-carousel-container">
      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={getCardClass(index)}>
            <div className="profile-image-wrapper">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`profile-image ${
                  index === activeIndex ? "active-img" : ""
                }`}
              />
            </div>
            <div className="testimonial-content">
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author-info">
                <span className="name">{testimonial.name}, </span>
                <span className="role">{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Dots */}
      <div className="dots-container">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
