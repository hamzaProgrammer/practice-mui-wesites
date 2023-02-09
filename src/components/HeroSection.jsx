import React from 'react';
import {Stack , Box } from "@mui/material"
import {Typography , Button } from "../utils"
import Header from "../common/Header"
import HeroSectionImage from "../assets/images/home-coffee.png"
import HeroSectionSmallImage from "../assets/images/coffe3.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';


const HeroSection = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className=" bg-[#4a2d26]" >
                <Header />
                <Box className="heroSec md:mb-12 mb-1" ></Box>
                <Stack direction={{xs : "column-reverse", sm : "row", md:"row"}} justifyContent={{sm : "center" , md:"flex-start"}} alignItems={{ sm : "center", md:"flex-start"}} className=" bg-[transparent] xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto md:mb-0 mb-4" >
                    <Box className=" flex md:flex-start flex-center p-3 md:pl-0 pl-8 md:min-w-[50%]" >
                        <img alt="hero section imag" className="md:max-w-[80%] max-w-[100%] lg:max-h-[100%] md:max-h-[400px] max-h-[280px] object-cover " src={HeroSectionImage} />
                    </Box>
                    <Stack direction="column" justifyContent={{ xs : "center" , sm : "flex-start" , md:"flex-start"}} alignItems={{ xs : "center", sm : "flex-start", md:"flex-start"}} className="md:min-w-[50%] md:pt-12 pt-2 mx-1 pb-2 md:mt-0 mt-6" >
                        <Typography children="Exceptional Quality" className="text-[#f0932b] md:text-lg text-sm " />
                        <Typography children="Its time for a " className="text-[white] text-medium font-[Pacifico] tracking-widest	mt-3 xl:text-6xl lg:text-5xl md:text-4xl text-3xl " />
                        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" className="mt-4" >
                            <Typography children="good Coffee " className="text-[white] text-medium font-[Pacifico] tracking-widest mt-3 xl:text-6xl lg:text-5xl md:text-4xl text-3xl " />
                            <img alt="hero section imag 1" className="md:max-w-[150px] max-w-[100px] md:max-h-[100px] max-h-[60px] object-cover " src={HeroSectionSmallImage} />
                        </Stack>
                        <Typography children="Aliquam consequat nulla in sem feugiat efficitur. Aenean euismod tortor ut magna efficitur, tincidunt venenatis mi placerat. Suspendisse quam diam, feugiat sodales leo vitae, tempus ornare nisi. " className="mt-4 text-[white] tracking-wide xl:text-md md:text-xs text-[11px] lg:pr-4 pr-0 md:px-0 px-4 " />
                        <Button children="Get Started" EndIcon={<ChevronRightIcon  />} className="text-[#2c3e50] bg-[#f0932b] rounded-full capitalize font-semibold px-4 lg:mt-10 mt-6 hover:bg-[transparent] hover:text-[white] heroBtn" />
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="space-around" alignItems="center" className="bg-[#6F4E37] rounded-t-[50px] md:hidden visible fixed bottom-0 left-0 min-w-[100%] h-[50px] z-20 px-2 pt-1" >
                    <Stack direction="column" alignItems="center" justifyContent="center" className=" p-1" >
                        <HomeIcon className="text-[white]" />
                        <Typography children="Home" className="text-[#f0932b] text-[10px] font-semibold text-sm " />
                    </Stack>
                    <Stack direction="column" alignItems="center" justifyContent="center" className=" p-1" >
                        <SchoolIcon className="text-[white]" />
                        <Typography children="About" className="text-[#f0932b] text-[10px] font-semibold text-sm " />
                    </Stack>
                    <Stack direction="column" alignItems="center" justifyContent="center" className=" p-1" >
                        <AddShoppingCartIcon className="text-[white]" />
                        <Typography children="Shops" className="text-[#f0932b] text-[10px] font-semibold text-sm " />
                    </Stack>
                    <Stack direction="column" alignItems="center" justifyContent="center" className=" p-1" >
                        <StorefrontIcon className="text-[white]" />
                        <Typography children="Restaurants" className="text-[#f0932b] text-[10px] font-semibold text-sm " />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default HeroSection;
