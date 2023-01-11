import React from 'react';
import HeroSection from "../components/HeroSectionAnimated"
import AmazingApp from "../components/AmazingFeatureSection"
import MusicSections from "../components/MusicSections"
import SearchMusicSection from "../components/SearchMusicSection"

const AnimatedWebsite = () => {
    return (
        <>
            <HeroSection />
            <AmazingApp />
            <MusicSections />
            <SearchMusicSection />
        </>
    );
}

export default AnimatedWebsite;
