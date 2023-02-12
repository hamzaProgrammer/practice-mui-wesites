import React from 'react';
import {Stack, Box} from "@mui/material"
import {Typography , Button} from "../utils"
import Image from '../assets/images/gym08.png'

const ReadyForChange = () => {
    return (
        <>
            <Stack spacing={{xs : 1 , md: 1 , lg: 2}} direction={{ xs : "column", sm:"row"}} justifyContent={{xs : "center" , sm:"flex-start"}} alignItems="center" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] my-6" >
                <Box className="md:min-w-[50%]" >
                    <img className="w-full xl:h-[400px] h-full object-cover" alt="gym pictur" src={Image} />
                </Box>
                <Stack direction="column" justifyContent="flex-start" alignItems={{xs: "center" , sm:"flex-start"}} className="md:min-w-[50%] md:mt-0 mt-6"  >
                    <Box className="flex md:mt-2 mt-1" >
                        <Typography children="Ready to make" className="text-xl xl:text-3xl lg:txt-2xl md:text-xl text-[#2f3640] mr-2 font-semibold" />
                        <Typography children="Change" className="text-xl xl:text-3xl lg:txt-2xl md:text-xl text-[#3742fa] font-semibold" />
                    </Box>
                    <Typography children="Maecenas interdum elit interdum, sagittis mi eget, fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero.fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero. .fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero. " className="text-[10px] xl:text-md lg:text-[13px] md:text-[12px] text-[#747d8c] mt-4 xl:mb-12 mb-6 md:px-0 px-2" />
                    <Button children="Get Started" className="text-[white] bg-[#4834d4] lg:px-6 md:px-4 md:h-[35px] h-[27px] capitalize font-semibold hover:bg-[transparent] hover:text-[#3742fa] heroBtn lg:text-[13px]  text-[11px]  mr-2" /> 
                </Stack>
            </Stack>
        </>
    );
}

export default ReadyForChange;
