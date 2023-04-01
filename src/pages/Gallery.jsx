import React from "react";

import "./Gallery.css";

function Gallery() {
  return (
    <div className="container">
      <h2 className="section-title">Gallery</h2>
      <section className="section-images">
        <article className="image-container">
          <img src="https://placehold.co/400x320" alt="" className="image" />
        </article>
        <article className="image-container">
          <img src="https://placehold.co/400x320" alt="" className="image" />
        </article>
        <article className="image-container">
          <img src="https://placehold.co/400x320" alt="" className="image" />
        </article>
        <article className="image-container">
          <img src="https://placehold.co/400x320" alt="" className="image" />
        </article>
        <article className="image-container">
          <img src="https://placehold.co/400x320" alt="" className="image" />
        </article>
        <article className="image-container">
          <img src="https://placehold.co/400x320" alt="" className="image" />
        </article>
      </section>
    </div>
  );
}

export default Gallery;
