import React from 'react';
import {Box} from "@mui/material"
import HistoryImage from "../assets/images/coffe11.png"
import { Typography } from '../utils';

const Step03 = () => {
    return (
        <>
            <Box className="flex flex-col justify-start py-2 p-1 max-w-[200px] xl:-ml-[50px]" >
                <Box className="w-[65px] h-[65px] rounded-full bg-[#B87333] flex justify-center items-center px-1 step -mb-6 z-10" >
                    <Typography children="Step 03" className="text-[white] text-sm" />
                </Box>
                <Box className="w-[130px] h-[130px] rounded-full bg-[#7B3F00] flex justify-center items-center px-2 z-5" >
                    <img className="max-w-[100%] max-h-[100%] object-fit" alt="step imag" src={HistoryImage} />
                </Box>
                <Typography children="jumoristiniai intarpai arba žodžiai, nė kiek nepanasūs i lotynų kalbą." className="text-[white] mt-2 text-sm" />
            </Box>
        </>
    );
}

export default Step03;
