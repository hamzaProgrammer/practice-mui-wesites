import React from 'react';
import {Stack} from "@mui/material"
import {Typography} from "../utils"
import PopularMenusSlides from "./PopularSlides"
import PopularMenus from "./PopularMenuRightSide"

const PopularThisMonth = () => {
    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[white]  pt-8 pb-8 mt-10 mb-10 curser-pointer " >
                <Typography children="Your Favorite Food" className="text-[crimson] md:text-2xl text-xl font-[Dancing-Script] italic  " />
                <Typography children="Popular This Month" className="text-[black] md:text-3xl text-2xl font-extrabold " />
                <Stack direction={{ sm : "column", md : "row" , lg : "row" }} spacing={{ md : 2 , sm : 1 , lg : 1}} justifyContent="center" alignItems="center" className="bg-[white] xl:min-w-[1240px] lg:px-4 px-0 min-w-full pt-8 pb-8 curser-pointer " >
                    <PopularMenusSlides />
                    <PopularMenus />
                </Stack>
            </Stack>
        </>
    );
}

export default PopularThisMonth;
