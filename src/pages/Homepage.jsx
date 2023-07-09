import React from "react";
import Navigation from "../components/Fragments/Navigation";
import Slider from "../components/Fragments/Slider";
import Services from "../components/Fragments/Services";
import About from "../components/Fragments/About";
import Banner from "../components/Fragments/Banner";
import Step from "../components/Fragments/Step";
import Join from "../components/Fragments/Join";
import Footer from "../components/Fragments/Footer";

const Homepage = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <Services />
      <About />
      <Banner />
      <Step />
      <Join />
      <Footer />
    </>
  );
};

export default Homepage;
