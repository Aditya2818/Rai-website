import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";
import testimonials from "./Testimonials";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getCardClass = (index) => {
    if (index === activeIndex) return "testimonial-card active";
    if (index === (activeIndex + 1) % testimonials.length)
      return "testimonial-card right";
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length)
      return "testimonial-card left";
    return "testimonial-card  leftFar";
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="testimonial-carousel-container" {...swipeHandlers}>
      <div className="testimonial-carousel">
        <img
          className="left-arrow"
          src="left-arrow.png"
          onClick={() => {
            goToPrev();
          }}
        />
        <img
          className="right-arrow"
          src="right-arrow.png"
          onClick={() => {
            goToNext();
          }}
        />

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
                <span className="name">{testimonial.name}</span>
                <span className="role">{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Dots */}
      <div className="dots-container">
        <div
          className="dot"
          onClick={() => {
            goToPrev();
          }}
        />
        <div className="dot active" />
        <div
          className="dot"
          onClick={() => {
            goToNext();
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
