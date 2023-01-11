import React from 'react';
import HeroSection from "../components/HeroSectionPortfolio"
import FloatingNavbar from "../components/PortfolioFloatingNavbar"
import About from "../components/PortfolioAboutme"
import Services from "../components/PortfolioSerices"
import Experience from "../components/PortfolioExperince"

const PortfolioWebsite = () => {
    return (
        <>
            <HeroSection/>
            <FloatingNavbar />
            <About/>
            <Services />
            <Experience />
        </>
    );
}

export default PortfolioWebsite;
