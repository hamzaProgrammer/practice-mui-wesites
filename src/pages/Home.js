import React from 'react';
import HeroSection from "../components/HeroSection"
import TopCategories from "../components/CoffeTypes"
import History from "../components/OurHistory"
import StepsOfManufacturing from "../components/StepsOfMaking"
import AboutCoffee from "../components/AboutCoffee"

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopCategories />
      <History />
      <StepsOfManufacturing />
      <AboutCoffee />
    </>
  );
}

export default Home;
