import React from 'react';
import {Stack} from "@mui/material"
import {Typography} from "../utils"
import MenuComponent from "./FamouseMenuComponent"

const FamousMenus = () => {
    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[white] pt-8 pb-8 mt-10 mb-10 curser-pointer " >
                <Typography children="Your Favorite Food" className="text-[crimson] md:text-2xl text-xl font-[Dancing-Script] italic  " />
                <Typography children="Choose & Enjoy" className="text-[black] md:text-3xl text-2xl font-extrabold " />
                <Stack direction={{sm : "row" , md: "row" , lg : "row" , xl : "row" }} spacing={{lg:2 , md:1 , sm : 1}} justifyContent="center" alignItems="center" className="mt-4 mb-4 " >
                    <MenuComponent  />
                    <MenuComponent  />
                    <MenuComponent  />
                </Stack>
            </Stack>
        </>
    );
}

export default FamousMenus;
