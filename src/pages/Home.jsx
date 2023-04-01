import React from "react";

import SlideSection from "../components/SlideSection";
import ContactForm from "../components/ContactForm";
import SectionGallery from "../components/SectionGallery";

function Home() {
  return (
    <div className="container">
      <SlideSection />
      <SectionGallery />
      <ContactForm />
    </div>
  );
}

export default Home;
