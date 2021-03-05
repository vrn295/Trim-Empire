import React from "react";
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div>
      <div className="nav-box">
        <h1 className="nav-box-text">Contact Us</h1>
      </div>
      <div className='contact-img'></div>
      <div className='contact-form-container'>
        <form className='contact-form' onSubmit = {() => alert("Thanks, We will Get in Touch with you soon")}>
          <label className='contact-label'>
            Name:
            <input type="text" className='contact-name' required/>
          </label>
          <label className='contact-label'>
            E-Mail:
            <input type="email" className='contact-name' required/>
          </label>
          <label className='contact-label'>
            Phone No:
            <input type="text" className='contact-name' required/>
          </label>
          <label className='contact-label'>
            Message:
            <textarea className='contact-name' required></textarea>
          </label>
          <input className='appoint-button contact-btn' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
