import React from "react";
import heroImage from "../assets/images/slider-img.png";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-between">
      <div className="hero-text">
        <h1 className="text-white">Crypto Currency</h1>
        <p>
          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
          fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
          molestias, veniam, vel architecto veritatis delectus repellat modi
          impedit sequi.
        </p>
        <div className="btn-box">
          <a href="#" className="btn1">
            Get Started
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
