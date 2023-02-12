import React from 'react';
import {Box , Stack} from "@mui/material"
import {Typography} from "../utils"
import BenefitComp from "./BenefitsSubComp"


const Benefits = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="min-w-[100%] my-10 " >
                <Stack direction="column" justifyContent="center" alignItems="center" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] py-8" >
                    <Box className="flex md:mt-2 mt-1" >
                        <Typography children="Benefits of" className="text-xl xl:text-3xl lg:txt-2xl md:text-2xl text-[#3742fa]  mr-2" />
                        <Typography children="Exercise" className="text-xl xl:text-3xl lg:txt-2xl md:text-2xl text-[#2f3640] " />
                    </Box>
                    <Typography children="Maecenas interdum elit interdum, sagittis mi eget, fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero." className="text-[11px] xl:text-md lg:text-[13px] md:text-[12px] text-[#747d8c] md:mt-6 mt-4 text-center xl:max-w-[80%] lg:max-w-[70%] md:max-w-[60%] w-full md:px-2 px-6 xl:mb-12 mb-6" />
                    <BenefitComp />
                </Stack>
            </Stack>
        </>
    );
}

export default Benefits;
