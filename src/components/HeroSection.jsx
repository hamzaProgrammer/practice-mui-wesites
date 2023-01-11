import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"

const HeroSection = () => {
    return (
        <>
            <Box className="flex lg:flex-row flex-col justify-between align-middle md:px-6 md:pt-4 " >
            {/* Left side section */}
                <Box className="flex md:flex-row flex-col justify-between align-middle md:min-w-[65%]" >
                    {/* inner left section */}
                    <Box className="flex md:flex-col flex-row md:px-0 px-4 justify-between align-middle">
                        <Box className="flex flex-col justify-between align-middle">
                            <Typography children="Skin" sx={{color : "#1e272e", fontSize : { xs : "15px", sm : "25px", md : "20px" , lg : "25px"} , fontWeight : 550}}  />
                            <Typography children="Protection" sx={{color : "#1e272e", fontSize : { xs : "15px", sm : "25px", md : "20px" , lg : "25px"} , fontWeight : 550}}  />
                            <Typography children="Cream" sx={{color : "#1e272e", fontSize : { xs : "15px",sm : "25px", md : "20px" , lg : "25px"} ,  fontWeight : 550}}  />
                        </Box>
                        <Box className="flex flex-col justify-between align-middle  " sx={{ marginTop : {xs: "15px" , md : "20px" , lg : "70px" , xl : "120px"}}} >
                            <Typography children="Trendy" sx={{color : "#2d3436", fontSize : { xs : "15px",sm : "25px", md : "28px" , lg : "35px"} , fontWeight : 600}}  />
                            <Typography children="Collection" sx={{color : "#2d3436", fontSize : { xs : "15px",sm : "25px", md : "28px" , lg : "35px"} ,  fontWeight : 600}}  />
                        </Box>
                    </Box>
                    {/* image section */}
                    <Box  className="flex justify-between align-middle max-w-[500px] md:max-h-[400px] max-h-[250px]">
                        <img alt="middle imag" className="max-w-[100%] max-h-[100%] rounded-lg bg-[#74b9ff]" src="https://amazon-3l2.pages.dev/static/media/hero.7e2be00982208588722d.png" />
                    </Box>
                </Box>
            {/* Right side section */}
                <Box className="flex lg:flex-col flex-row lg:flex-end justify-evenly lg:mt-0 mt-4 lg:align-end align-center">
                    <Box className="flex flex-col justify-between align-middle">
                        <Typography children="1.5m" sx={{color : "#1e272e", fontSize : { xs : "15px",sm : "28px", md : "20px" , lg : "25px"} , fontWeight : 700}}  />
                        <Typography children="Monthly Traffic" sx={{color : "#1e272e", fontSize : { xs : "15px",sm : "25px", md : "20px" , lg : "25px"}  , fontWeight : 550}}  />
                    </Box>
                    <Box className="flex flex-col justify-between align-middle" sx={{ marginTop : {xs: "15px" , md : "200px" , lg : "250px" ,} }} >
                        <Typography children="100k" sx={{color : "#2d3436", fontWeight : 600 , fontSize : { xs : "15px",sm : "25px", md : "25px" , lg : "35px"} }}  />
                        <Typography children="Happy Customers"  sx={{color : "#2d3436", fontSize : { xs : "15px",sm : "25px", md : "25px" , lg : "35px"} , fontWeight : 600}}  />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default HeroSection;
