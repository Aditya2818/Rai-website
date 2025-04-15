import React, { useState, forwardRef } from "react";
import "./Section6.css";
import ResponseCard from "../../components/Response/Response";


const Section6 = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    workshop: "",
    notes: "",
  });

  const [submitted,setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const url = "https://script.google.com/macros/s/AKfycbwybRCrIuk9Qd1jiyJfyx0ZtKHQ9U8Af2RQxyQ64b9yrt6V5Z_AZxpd53vxTO2yeZQT9A/exec";
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        Name: formData.name,
        Email: formData.email,
        City: formData.city,
        Phone: formData.phone,
        Workshop: formData.workshop,
        Notes: formData.notes
      }).toString()
    })
    .then((res) => res.text())
    .then(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false); 
        setIsSubmitting(false);
      }, 5000);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to submit.");
        setIsSubmitting(false);
    });
  };
  

  return (
    <div ref={ref} className="section6">
      <div className="section6-content">
        <img className="section6-img" src="./Photo.png" />
        <form className="section6-form" onSubmit={handleSubmit}>
        {submitted && <ResponseCard />}
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
            <select
              name="workshop"
              onChange={handleChange}
              required
              defaultValue=""
            >
              <option value="" disabled>
                Workshop Interested in
              </option>
              <option value="Arts Administration: Unlocking a New Stream of Income">
                Arts Administration: Unlocking a New Stream of Income
              </option>
              <option value="Producing Your Own Work: From Idea to Stage">
                Producing Your Own Work: From Idea to Stage
              </option>
              <option value="Dance Contract Essentials: From Clause to Confidence">
                Dance Contract Essentials: From Clause to Confidence
              </option>
              <option value="Fundraising and Grant Writing for Dancers">
                Fundraising and Grant Writing for Dancers
              </option>
              <option value="Resume/letter">
                Resume/Cover Letter Guidance
              </option>
              <option value="somethin-else">Something else</option>
            </select>
          </div>

          <div className="input-group full-width">
            <label>Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
});

export default Section6;
