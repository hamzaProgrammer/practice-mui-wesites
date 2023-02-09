import React from 'react';
import {Stack , Box} from "@mui/material"
import {Typography } from "../utils"
import Step01 from "./Step01"
import Step02 from "./Step02"
import Step03 from "./Step03"
import SpacingImage from "../assets/images/curve-image.svg"


const StepsOfMaking = () => {
    return (
        <>
            <Box className="min-w-[100%] bg-[#6F4E37] md:pb-8 pb-2" >
                <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[#6E260E] rounded-t-[100px] coffeeSteps" >
                    <Typography children="Steps of Manufacturing Our Product" className="text-[white] text-medium font-[Pacifico] mb-12 tracking-widest xl:text-4xl lg:text-3xl md:text-2xl text-[15px] lg:mt-10 md:mt-4 mt-12 " />
                    <Stack direction={{xs : "column", sm : "row", md:"row"}} justifyContent={{sm : "center" , md:"space-around"}} alignItems={{xs : "center" , sm : "flex-start", md:"flex-start"}} className="xl:max-w-[60%] lg:max-w-[90%] max-w-[1240px] mx-auto w-full md:mb-0 mb-4 md:h-[400px] stepsClass" >
                        <Step01 />
                        <img alt="curve imag" className="lg:w-[40px] md:w-[30px] h-[150px] object-fit lg:mt-[220px] md:mt-[200px] -ml-[70px] xl:-ml-[80px] lg:-ml-[50px] md:-ml-[10px] leftCurve" src={SpacingImage} />
                        <Step02 />
                        <img alt="curve imag" className="lg:w-[40px] md:w-[30px] h-[200px] object-fit xl:mt-[220px] lg:mt-[230px] md:mt-[180px] xl:-ml-[30px] lg:-ml-[40px] rightCurve" src={SpacingImage} />
                        <Step03 />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default StepsOfMaking;
