import React from 'react';
import {Box} from "@mui/material"
import IconButton from "../utils/IconButton"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const PortfolioFloatingNavbar = () => {
    const iconStyle = {
        fontSize : "25px",
        color : "white"
    }
    return (
        <>
            <Box className="mt-[50px] mb-4  min-h-[70px] fixed md:top-[80%] lg:left-[40%] md:left-[35%] sm:top-[60%] top-[50%] left-[1%] " >
                <Box className="min-w-[310px] p-3 mx-auto flex justify-between items-center bg-[rgba(0,0,0,0.3)] rounded-md">
                    <a href="#home"><IconButton Icon={<HomeIcon />} sx={iconStyle} size="small" /></a>
                    <a href="#about"><IconButton Icon={<InfoIcon />} sx={iconStyle} size="small" /></a> 
                    <a href="#experience"><IconButton Icon={<MiscellaneousServicesIcon />} sx={iconStyle} size="small" /></a>
                    <a href="#services"><IconButton Icon={<PermContactCalendarIcon />} sx={iconStyle} size="small" /></a>
                </Box>
            </Box>
        </>
    );
}

export default PortfolioFloatingNavbar;
