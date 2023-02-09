import React from 'react';
import {Stack , Box} from "@mui/material"
import {Typography } from "../utils"
import HistoryImage from "../assets/images/coffe1.png"


const OurHistory = () => {
    return (
        <>
            <Box className="min-w-[100%] bg-[#6F4E37] md:pb-8 pb-2" >
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="bg-[white] rounded-t-[100px]" >
                    <Stack direction={{xs : "column", sm : "row", md:"row"}} justifyContent={{sm : "center" , md:"flex-start"}} alignItems={{ sm : "center", md:"flex-start"}} className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto w-full md:mb-0 mb-4  " >
                        <Box className="min-w-[50%] w-full p-10" >
                            <img className="w-full h-full object-cover rounded-2xl" alt="history imag" src={HistoryImage} />
                        </Box>
                        <Stack direction="column" justifyContent="center" alignItems={{xs : "center" , sm : "flex-start" , md:"flex-start"}} className="min-w-[50%] w-full md:py-10 py-3" >
                            <Typography children="Our History" className="text-[6F4E37] text-medium font-[Pacifico] tracking-widest xl:text-5xl lg:text-4xl md:text-3xl text-2xl lg:mt-10 md:mt-4" />
                            <Typography children="Aliquam consequat nulla in sem feugiat efficitur. Aenean euismod tortor ut magna efficitur, tincidunt venenatis mi placerat. Suspendisse quam diam, feugiat sodales leo vitae, tempus ornare nisi. " className="lg:mt-12 mt-6 text-[6F4E37] tracking-widest xl:text-[14px] md:text-xs text-[11px] lg:pr-4 pr-0 md:px-0 px-4 " />
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default OurHistory;
