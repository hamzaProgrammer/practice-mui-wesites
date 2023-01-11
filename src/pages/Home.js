import React from 'react';
import HeroSection from "../components/HeroSection"
import Swiper from "../components/HomeSwipper"
import FeaturedProducts from '../components/FeaturedProducts';
import { Box } from '@mui/material';
import Testimonial from '../components/Testimonal';


const Home = () => {
  return (
    <>
      <Box className="max-w-[1240px] mx-auto" >
        <HeroSection  />
        <Swiper />
        <FeaturedProducts/>
        <Testimonial/>
      </Box>
    </>
  );
}

export default Home;
