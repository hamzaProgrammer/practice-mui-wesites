import React from 'react';
import {Stack, Box} from "@mui/material"
import {Typography} from "../utils"
import ExerciseIcon from "../assets/images/gym01.png"

const Benefit = () => {
    return (
        <>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" className="bg-[transparent]  " >
                <img className="w-[50px] h-[60px] object-cover bg-[white] p-1 mr-2 rounded-md" alt="benefit icon" src={ExerciseIcon} />
                <Box className="flex flex-col justify-start">
                    <Typography children="Healthy Life" className="text-[15px] lg:txt-lg md:text-[15px] text-[white] font-semibold  mr-2" />
                    <Typography children="Lorem ispum is a life of exercise and without this we are nothing." className="text-[10px] lg:text-[12px] md:text-[10px] text-[white] max-w-[90%] " />
                </Box>
            </Stack>
        </>
    );
}

export default Benefit;
