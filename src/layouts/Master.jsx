import React from "react";
import Navbar from "./partials/Navbar";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Master = ({ children }) => {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Master;
