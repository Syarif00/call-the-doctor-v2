import React from "react";
import Join from "../Fragments/Join";
import Footer from "../Fragments/Footer";
import Navigation from "../Fragments/Navigation";
import Step from "../Fragments/Step";

const Pelayanan = (props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      {children}
      <Step />
      <Join />
      <Footer />
    </>
  );
};

export default Pelayanan;
