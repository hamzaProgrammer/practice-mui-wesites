import React from 'react';
import {Stack } from "@mui/material"
import {Typography , InputField , Button } from "../utils"
import HeroSectionComp from "./HeroSectionComp"

const HeroSection = () => {
    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[url('https://raw.githubusercontent.com/sunil9813/Food-Order/master/images/home.jpg')] bg-no-repeat bg-cover bg-center mt-[70px] min-h-screen pt-2 lg:pb-3 pb-[100px] " >
                <Stack direction={{sm: "column" , md: "row"}} justifyContent="center" alignItems="center" spacing={{sm : 1, md: 1 , lg: 3 , xl : 4}} >
                    <Typography children="Order" className="font-extrabold lg:text-5xl xl:text-6xl md:text-5xl text-4xl text-[white]"  />
                    <Typography children="Food Online From" className="font-bold font-[sofia] italic lg:text-5xl xl:text-6xl md:text-5xl text-4xl text-[white]"  />
                    <Typography children="the" className="font-extrabold  lg:text-5xl xl:text-6xl md:text-5xl text-4xl text-[white]"  />
                </Stack>
                <Typography children="Best Restaurants" className="font-extrabold lg:text-5xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-[white]"  />
                <Stack direction={{sm: "column" , md: "row"}} justifyContent="center" alignItems="center" spacing={{xs : 2, sm : 2, md: 1 , lg: 3 , xl : 4}} className="sm:max-w-[950px] max-w-[310px] lg:min-w-[950px] mt-10 mx-auto rounded-md  bg-[yellow] px-3 py-4" >
                    <InputField placeholder="Restaurant Name..." variant="filled" fullWidth={{sm : true , md : true , lg : false}} focused={true} className="bg-[white] text-[#2d3436] md:w-[auto] md:min-w-[350px] min-w-[300px] " />
                    <InputField placeholder="Search Location ..." variant="filled" fullWidth={{sm : true , md : true , lg : false}} focused={true} className="bg-[white] text-[#2d3436] md:w-[auto] md:min-w-[350px] min-w-[300px] " />
                    <Button children="Search Now" className="bg-[crimson] text-[white] font-bold md:h-[55px] h-[40px] min-w-[150px] hover:bg-[#d63031] " />
                </Stack>
                <Stack direction={{ xs: "column" , sm: "row" , md: "row"}} justifyContent="center" alignItems="center" spacing={{xs : 2, sm : 2, md: 5 , lg: 10 , xl : 10}} className="sm:max-w-[950px] max-w-[320px] lg:min-w-[950px] mt-10 mx-auto rounded-md px-3 py-4" >
                    <Stack direction="row" justifyContent="space-around" className="min-w-[50%]" >
                        <HeroSectionComp count="137" text="Restaurants" />
                        <HeroSectionComp count="158" text="People Served" />
                    </Stack>
                    <Stack direction="row" justifyContent="space-around" className="md:ml-[20px] min-w-[50%]  " >
                        <HeroSectionComp count="639k" text="happy Service" />
                        <HeroSectionComp count="256" text="Regular Users" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default HeroSection;
