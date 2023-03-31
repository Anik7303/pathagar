import React, { useState } from "react";

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
    <section className="section__contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__input"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form__input"
          name="email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={values.content}
          onChange={handleChange}
          placeholder="Content..."
          required
        />
        <input type="submit" className="btn form__btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
