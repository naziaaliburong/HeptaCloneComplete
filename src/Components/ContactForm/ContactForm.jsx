import React, { useState } from "react";
import "./ContactForm.css"; // Include custom styles here.

function ContactForm() {
    const [color1, setColor1] = useState("#ddd");
    const [color2, setColor2] = useState("#ddd");
    const [color3, setColor3] = useState("#ddd");
    const [color4, setColor4] = useState("#ddd");
    function borderColorInput1(){
        setColor1("rgb(101, 192, 186)");
        setColor2("ddd");
        setColor3("ddd");
        setColor4("ddd");
    }
    function borderColorInput2(){
        setColor2("rgb(101, 192, 186)");
        setColor1("#ddd");
        setColor3("#ddd");
        setColor4("#ddd");
    }
    function borderColorInput3(){
        setColor3("rgb(101, 192, 186)");
        setColor1("#ddd");
        setColor2("#ddd");
        setColor4("#ddd");
    }
    function borderColorInput4(){
        setColor4("rgb(101, 192, 186)");
        setColor1("#ddd");
        setColor2("#ddd");
        setColor3("#ddd");
    }
  return (
    <div className="container-fluid my-5 py-5 d-flex contact-form">
      <div className="row">
        {/* Left Section - Contact Form */}
        <div className="col-md-6 col-lg-7">
          <div className="card form-card shadow p-4">
            <form className="p-2">
              <div className="input-style mb-3">
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    id="name"
                    onClick={borderColorInput1}
                    style={{border: `1px solid ${color1}`}}
                  />
                </div>
                <div className="col">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    id="phone"
                    onClick={borderColorInput2}
                    style={{border: `1px solid ${color2}`}}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control input-field"
                  id="email"
                  onClick={borderColorInput3}
                  style={{border: `1px solid ${color3}`}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Write Message
                </label>
                <textarea
                  className="form-control input-field"
                  id="message"
                  rows="10"
                  onClick={borderColorInput4}
                  style={{border: `1px solid ${color4}`}}
                ></textarea>
              </div>
              <a href="/contact"><button type="submit" className="btn send-btn">
                Send Message
              </button></a>
            </form>
          </div>
        </div>

        {/* Right Section - Contact Details */}
        <div className="col-md-6 col-lg-5 contact-details d-flex flex-column justify-content-start">
          <h6 className="text-uppercase fw-bold contact-heading">Address:</h6>
          <p className="contact-text">
            98 West 21th Street, Suite 721 New York NY 10016
          </p>

          <h6 className="text-uppercase fw-bold contact-heading">Phone:</h6>
          <p className="contact-text">(+1) 435 3533</p>

          <h6 className="text-uppercase fw-bold contact-heading">Email:</h6>
          <p className="contact-text">info@yourdomain.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
