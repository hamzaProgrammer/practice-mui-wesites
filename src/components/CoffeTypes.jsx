import React from 'react';
import {Stack} from "@mui/material"
import {Typography , Button } from "../utils"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CoffeeType from "./CoffeType"


const CoffeTypes = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="bg-[#6F4E37] rounded-t-[100px]" >
                <Stack direction={{xs : "column", sm : "row", md:"row"}} justifyContent={{sm : "center" , md:"flex-start"}} alignItems={{ sm : "center", md:"flex-start"}} className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto w-full md:mb-0 mb-4  " >
                    <Stack direction="column" justifyContent={{xs : "center" , sm : "flex-start" , md:"flex-start"}} alignItems={{xs : "center" , sm : "flex-start", md:"flex-start"}} className="py-6 lg:min-w-[50%] md:max-w-[40%] lg:max-w-[50%] md:min-w-[40%] w-full md:px-10 " >
                        <Button children="Scroll Down" EndIcon={<ArrowDropDownIcon  />} className="text-[#2c3e50] bg-[#C19A6B] rounded-full capitalize font-semibold px-4 lg:mt-10 mt-6 hover:bg-[transparent] hover:text-[white] heroBtn animate-bounce max-w-[150px] " />
                        <Typography children="Aliquam consequat nulla in sem feugiat efficitur. Aenean euismod tortor ut magna efficitur, tincidunt venenatis mi placerat. Suspendisse quam diam. " className="mt-7 text-[white] tracking-wide xl:text-[15px] md:text-[14px] text-[12px] lg:pr-4 pr-0 md:px-0 px-4 " />
                    </Stack>
                    <Stack direction={{xs : "column", sm : "row", md:"row"}} justifyContent={{xs : "center" , sm : "space-between" , md:"space-between"}} alignItems={{xs : "center" , sm : "space-between", md:"space-between"}} className="py-6 xl:min-w-[50%] lg:w-[60%] md:w-[50%] w-full xl:mr-0 lg:mr-10" >
                        <CoffeeType />
                        <CoffeeType />
                        <CoffeeType />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default CoffeTypes;
