import React, { useState } from "react";

import "./Contact.css";

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", content: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log({ value, name });
    setValues((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ values });
  };

  return (
    <div className="container">
      <section className="section-contact">
        <h2 className="section-contact__title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <textarea
              className="form__textarea"
              name="content"
              // cols="30"
              // rows="10"
              value={values.content}
              onChange={handleChange}
              placeholder="Content..."
              required
            />
          </div>
          <input type="submit" className="btn form__btn" value="Submit" />
        </form>
      </section>
    </div>
  );
}

export default Contact;
