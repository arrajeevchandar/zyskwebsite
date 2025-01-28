import logo from './logo.svg';
import './App.css';

import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/footer";

  const images = [
    { id: 1,  imagePath: "/images/boltshift.png" },
    { id: 2, imagePath: "/images/featherdev.png" },
    { id: 3, imagePath: "/images/globalbank.png" },
    { id: 4, imagePath: "/images/lightbox.png" },
    { id: 5, imagePath: "/images/nietzsche.png" },
    { id: 6, imagePath: "/images/spherule.png" },
  ];
  const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
        {/* Image Section */}
        <div className="mx-auto text-center px-4 flex justify-center items-center">
        <img src="/images/testmyskills.png" alt="Test My Skills" className="w-full max-w-3xl" />
      </div>
     
      <div className="image-container">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <h3>{image.title}</h3>
            <img src={image.imagePath} alt={image.title} width={100} height={100} />
          </div>
        ))}
      </div>
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
