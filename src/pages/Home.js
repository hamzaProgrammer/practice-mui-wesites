import React from 'react';
import HeroSection from "../components/HeroSection"
import Benefits from "../components/Benefits"
import Changes from "../components/ReadyForChange"
import Prices from "../components/Prices"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Benefits />
      <Changes />
      <Prices/>
      <Testimonials/>
    </>
  );
}

export default Home;
