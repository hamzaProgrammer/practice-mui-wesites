import React from 'react';
import HeroSection from "../components/HeroSecton"
import Sponsers from "../components/SponserCompanies"
import BestChoices from "../components/BestChoices"
import OurValues from "../components/OurValues"
import ContactUs from "../components/ContactUs"
import GetStarted from "../components/GetStarted"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Sponsers />
      <BestChoices/>
      <OurValues />
      <ContactUs />
      <GetStarted />
    </>
  );
}

export default Home;
