import React from 'react';
import {Box , Stack} from "@mui/material"
import {Typography} from "../utils"
import Price from "./PriceComp"

const Prices = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="min-w-[100%] " >
                <Stack direction="column" justifyContent="center" alignItems="center" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] xl:mt-12 lg:mt-6 mt-6" >
                    <Box className="flex md:mt-2 mt-1" >
                        <Typography children="Gym" className="text-xl xl:text-4xl lg:txt-3xl md:text-2xl text-[#2f3640] mr-2 " />
                        <Typography children="Pricing" className="text-xl xl:text-4xl lg:txt-3xl md:text-2xl text-[#3742fa]  mr-2" />
                        <Typography children="Plan" className="text-xl xl:text-4xl lg:txt-3xl md:text-2xl text-[#2f3640] " />
                    </Box>
                    <Typography children="Maecenas interdum elit interdum, sagittis mi eget, fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero." className="text-[11px] xl:text-md lg:text-[14px] md:text-[12px] text-[#747d8c] mt-4 xl:max-w-[60%] lg:max-w-[70%] md:max-w-[60%] w-full md:px-2 px-6 xl:mb-12 mb-6" />
                    <Stack spacing={{xs : 1 , md: 1 , lg: 2}} direction={{ xs : "column", sm:"row" ,md:"row"}} justifyContent={{xs : "center" , sm:"center"}} alignItems={{xs : "center" , sm:"flex-start"}} className="max-w-[90%] md:py-12 py-2 lg:px-8 px-2 rounded-md md:mx-3 mx-1 md:w-[100%] lg:ml-0 md:-ml-12 ml-0 w-[95%]" >
                        <Price />
                        <Price isMiddle={true} />
                        <Price />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Prices;
