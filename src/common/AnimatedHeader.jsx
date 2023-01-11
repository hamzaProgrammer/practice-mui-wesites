import React from 'react';
import {Box} from "@mui/material"
import Button from "../utils/Button"
import MenuIcon from '@mui/icons-material/Menu';


const AnimatedHeader = () => {
    const buttonStyle = {
        color : "white" ,
        fontWeight : 600,
        marginRight : "25px",
        '&:hover' : {
            backgroundColor : "#081730",
            color : "white",
            cursor : "pointer"
        }
    }
    const buttonStyleOutlined = {
        color : "white" ,
        fontWeight : 600,
        fontSize : {xl:"8px" , lg: "13px" , sm: "10px"},
        maxWidth : "auto",
        marginRight : "25px",
        maxHeight : "30px",
        '&:hover' : {
            backgroundColor : "#081730",
            color : "white",
            cursor : "pointer"
        }
    }
    return (
        <>
            <Box className="flex space-between align-center px-4 py-1 max-w-[100%] bg-[#081730]" >
                <img alt="logo" className="lg:min-w-[5%] md:min-w-[10%] min-w-[20%] rounded-md max-h-[50px] hover:cursor-pointer" src="https://e7.pngegg.com/pngimages/69/982/png-clipart-music-icon-itunes-computer-icons-logo-itunes-text-logo.png" />
                <Box className="flex justify-center lg:min-w-[70%] w-[0%] lg:visible invisible " >
                    <Box className="flex justify-between" >
                        <Button children="Home" variant="text"  sx={buttonStyle} />
                        <Button children="About" variant="text" sx={buttonStyle} />
                        <Button children="Contact" variant="text" sx={buttonStyle} />
                        <Button children="Gallery" variant="text" sx={buttonStyle} />
                    </Box>
                </Box>
                <Box className="flex justify-end lg:min-w-[25%] md:min-w-[90%] md:ml-0 ml-2 min-w-[80%] mt-2  " >
                    <Button children="Login" variant="outlined" color="white" size="small" sx={buttonStyleOutlined} />
                    <Button children="Sign Up" variant="outlined" color="white" size="small" sx={buttonStyleOutlined} />
                    <MenuIcon className="text-md lg:invisible visible" />
                </Box>
            </Box>
        </>
    );
}

export default AnimatedHeader;
