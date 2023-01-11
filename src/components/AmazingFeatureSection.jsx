import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"

const AmazingFeatureSection = () => {
    const firstStyle = {
        color : "white",
        fontWeight : 500,
        fontSize : {lg:"23px", md : "21px" , sm : "18px" , xs : "14px"}
    }
    const secondStyle = {
        color : "white",
        fontWeight : 700,
        fontSize : {lg:"25px", md : "23px" , sm : "20px" , xs : "18px"},
        textAlign : "center"
    }
    return (
        <>
            <Box className="flex flex-col items-center justify-center bg-[#020917] mt-4 mb-2 h-[180px] " >
                <Box className="max-w-[500px] mx-auto" >
                    <Typography children="An Amazing App Can Change Your Daily Life" sx={firstStyle} />
                    <Typography children="Music Experience" sx={secondStyle} />
                </Box>
            </Box>
        </>
    );
}

export default AmazingFeatureSection;
