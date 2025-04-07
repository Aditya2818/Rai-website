import React, { useState, useRef, useEffect } from "react";
import "./Section5.css";
import Button from "../../components/Button/Button";
import Modal from "./Modal";

const Section5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="section5">
      {isOpen ? (
        <Modal modalRef={modalRef} />
      ) : (
        <div className="section5-content">
          <div className="section5-text">
            <div className="comma-open">“</div>
            <span className="section5-text1">
              I have been dancing all my life and dreamed of becoming a
            </span>
            <span className="section5-text2">
              {" "}
              professional dancer. I believed improving my technical skills
              alone would prepare me to
            </span>
            <span className="section5-text3">
              navigate the dance world with confidence—but I realised it wasn’t
              enough.
            </span>

            <br></br>
            <br></br>
            <span className="section5-text4">
              When I learned how the business and technical aspects of the dance
              world work together, I
            </span>
            <span className="section5-text5">
              immediately understood my purpose. Dancers need exposure to
              business skills just as
            </span>
            <span className="section5-text6">
              {" "}
              much as they need master classes and auditions.
            </span>
            <br></br>

            <p className="section5-text7">
              We must learn how to manage the business that is ourselves.
            </p>
            <div className="section5-text-last">
              <span className="section5-text8">KIRA RAI DANIEL</span>
              <span className="section5-text7">
                Director, Rai Arts Initiative
              </span>
              <div className="comma-close">”</div>
            </div>

            <div className="section5-btn" onClick={() => setIsOpen(true)}>
              <Button variant="gradient" text="Learn more about Kira" />
            </div>
          </div>

         
        </div>
      )}
    </div>
  );
};

export default Section5;
