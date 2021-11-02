import React from "react";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Alert />
      <Navbar />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
