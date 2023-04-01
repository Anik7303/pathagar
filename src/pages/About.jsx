import React from "react";

function About() {
  return (
    <div className="container">
      <section className="section-directors">
        <h2 className="section-title">Board of Directors</h2>
        <article>
          <div className="card">
            <img
              src="https://placehold.co/400x400"
              alt=""
              className="card__image"
            />
            <h3 className="card__title">Name</h3>
            <p className="card__designation">Designation</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;
