import React from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Row from "../Component/Rows/Row/Row";
import Rowlist from "../Component/Rows/Rowlist/Rowlist";

const Home = () => {
  return (
    <>
      <Header />
      <Banner /> 
       <Rowlist/>
      <Footer />
    </>
  );
};

export default Home;
