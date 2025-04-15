import React, { useState, forwardRef } from "react";
import "./Section6.css";
import ResponseCard from "../../components/Response/Response";

const Section6 = forwardRef((props,ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    workshop: "",
    notes:"",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div ref={ref} className="section6">
      <div className="section6-content">
        <img className="section6-img" src="./Photo.png" />
        <form className="section6-form" onSubmit={handleSubmit}>
          <ResponseCard/>
          <span className="form-heading">
            Share your info and we’ll reach out!
          </span>
          <div className="form-grid">
            <div className="input-group">
              <label>Your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Email id</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your location"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your number"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group full-width">
            <label>Select an option</label>
            <select name="workshop" onChange={handleChange} required defaultValue="">
               
              <option value="" disabled>Workshop Interested in</option>
              <option value="Arts Administration: Unlocking a New Stream of Income">Arts Administration: Unlocking a New Stream of Income</option>
              <option value="Producing Your Own Work: From Idea to Stage">Producing Your Own Work: From Idea to Stage</option>
              <option value="Dance Contract Essentials: From Clause to Confidence">
              Dance Contract Essentials: From Clause to Confidence
              </option>
              <option value="Fundraising and Grant Writing for Dancers">Fundraising and Grant Writing for Dancers</option>
              <option value="Resume/letter">Resume/Cover Letter Guidance</option>
              <option value="somethin-else">Something else</option>
            </select>
          </div>

          <div className="input-group full-width">
            <label>Notes</label>
            <textarea id="summary" name="summary" rows="3" onChange={handleChange} ></textarea>
          </div>
    
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
});

export default Section6;
