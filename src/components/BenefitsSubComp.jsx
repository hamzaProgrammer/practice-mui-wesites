import React from 'react';
import {Stack} from "@mui/material"
import Banefit from "./Benefit"

const BenefitsSubComp = () => {
    return (
        <>
            <Stack spacing={{xs : 1 , md: 1 , lg: 2}} direction={{ xs : "column", sm:"row" ,md:"row"}} justifyContent={{xs : "center" , sm:"center"}} alignItems={{xs : "center" , sm:"flex-start"}} className="max-w-[90%] bg-[#3742fa] py-12 lg:px-8 px-2 rounded-md md:mx-3 mx-1 md:w-[max-content] w-[95%]" >
                <Banefit />
                <Banefit />
                <Banefit />
            </Stack>
        </>
    );
}

export default BenefitsSubComp;
