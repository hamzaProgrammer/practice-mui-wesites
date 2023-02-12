import React from 'react';
import {Stack, Box , Divider } from "@mui/material"
import {Typography, Button} from "../utils"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const PriceComp = ({isMiddle}) => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" className="bg-[white] shadow-2xl rounded-md xl:w-[350px] lg:w-[300px] md:w-[280px] sm:w-[70%] w-full pb-4" >
                <Box className={`${isMiddle ? "bg-[#4834d4]" : "bg-[transparent]"} min-w-[100%] min-h-[100px] flex flex-col justify-center items-center -mb-3`}>
                    <Box className={`flex flex-col justify-center items-center h-[80px]  `} >
                        <Typography children="Regular Member" className={`text-[11px] lg:txt-lg md:text-[15px] ${isMiddle ? "text-[white]" : "text-[#222f3e]"} font-semibold  mr-2`} />
                        <Box className="flex justify-center" >
                            <Typography children="$50" className={`text-[10px] lg:txt-lg md:text-[14px] ${isMiddle ? "text-[white]" : "text-[#222f3e]"} font-semibold`} />
                            <Typography children="/month" className={`text-[10px] lg:txt-lg md:text-[14px] ${isMiddle ? "text-[white]" : "text-[#222f3e]"} `} />
                        </Box>
                    </Box>
                </Box>
                <Divider className="priceDetails" />
                <Box className="flex flex-col justify-start items-start my-6 lg:-ml-9 md:-ml-7 md:py-8 py-2 px-4" >
                    <Box className="flex justify-start items-center mb-2" >
                        <FiberManualRecordIcon className="max-w-[10px] max-h-[10px] mr-1" />
                        <Typography children="Customer Support" className="text-[11px] lg:txt-lg md:text-[15px] text-[#2C3A47]" />
                    </Box>
                    <Box className="flex justify-start items-center mb-2" >
                        <FiberManualRecordIcon className="max-w-[10px] max-h-[10px] mr-1" />
                        <Typography children="Personel Trainer" className="text-[11px] lg:txt-lg md:text-[15px] text-[#2C3A47]" />
                    </Box>
                    <Box className="flex justify-start items-center mb-2" >
                        <FiberManualRecordIcon className="max-w-[10px] max-h-[10px] mr-1" />
                        <Typography children="Standerd Option" className="text-[11px] lg:txt-lg md:text-[15px] text-[#2C3A47]" />
                    </Box>
                    <Box className="flex justify-start items-center mb-2" >
                        <FiberManualRecordIcon className="max-w-[10px] max-h-[10px] mr-1" />
                        <Typography children="5 classes per week" className="text-[11px] lg:txt-lg md:text-[15px] text-[#2C3A47]" />
                    </Box>
                    <Box className="flex justify-start items-center mb-2" >
                        <FiberManualRecordIcon className="max-w-[10px] max-h-[10px] mr-1" />
                        <Typography children="Unlimited access to the gym" className="text-[11px] lg:txt-lg md:text-[15px] text-[#2C3A47]" />
                    </Box>

                </Box>
                <Button children="Join Now" className="text-[white] bg-[#4834d4] px-4 md:h-[30px] h-[27px] capitalize font-semibold hover:bg-[transparent] hover:text-[#3742fa] heroBtn lg:text-[13px]  text-[11px]  mr-2" /> 
            </Stack>
        </>
    );
}

export default PriceComp;
