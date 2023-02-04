import React from 'react';
import {Stack} from "@mui/material"
import {Typography} from "../utils"
import OrderComponent from "./OrderComponent"

const FoodForYouThisMonth = () => {
    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[white] max-w-[1240px] mx-auto pt-8 pb-8 mt-10 mb-10 curser-pointer " >
                <Typography children="Your Favorite Food" className="text-[crimson] md:text-2xl text-xl font-[Dancing-Script] italic  " />
                <Typography children="Choose Your Food" className="text-[black] md:text-3xl text-2xl font-extrabold " />
                <Stack direction={{ sm : "column", md: "row" , lg : "row"}} justifyContent={{ md : "center" , lg : "space-around"}} alignItems={{ md : "center" , lg : "flex-start"}} spacing={2} className="bg-[white] pt-8 pb-8 mt-10 mb-10 min-w-full curser-pointer " >
                    <OrderComponent />
                    <OrderComponent />
                </Stack>
            </Stack>
        </>
    );
}

export default FoodForYouThisMonth;
