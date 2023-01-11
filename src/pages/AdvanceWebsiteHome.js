import React from 'react';
import { Box } from '@mui/material';
import HeroSection from "../components/AdvanceHeroSection"
import SkillSection from "../components/AdvanceSkillSection"


const Home = () => {
  return (
    <>
      <Box className="" >
        <HeroSection />
        <SkillSection />
      </Box>
    </>
  );
}

export default Home;
