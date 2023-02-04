import React from 'react';
import HeroSection from '../components/HeroSection'
import Waves from "../components/WavesSection"
import TopRestaurants from "../components/TopRestaurants"
import TopMenus from "../components/FamouseMenus"
import PopularThisMonth from "../components/PopularThisMonth"
import ChooseFoodComp from "../components/FoodForYouThisMonth"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Waves />
      <TopRestaurants />
      <TopMenus />
      <PopularThisMonth />
      <ChooseFoodComp />
    </>
  );
}

export default Home;
