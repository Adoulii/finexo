import About from "../components/About";
import CustomerSection from "../components/Customers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Team from "../components/Team";
import WhyChooseUs from "../components/Us";
import React from "react";
import { ToastContainer } from "react-toastify"; 
const Home = () => {
  return (
    <>
      <Header />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="team">
        <Team />
      </div>
      <CustomerSection />
      <Footer />
      <ToastContainer />

    </>
  );
};

export default Home;
