import React from 'react';
import {Stack} from "@mui/material"
import {Typography} from "../utils"

const HeroSectionComp = ({count , text}) => {
    return (
        <>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" className="" >
                <img alt="house" className="max-w-[60px] max-h-[60px] rounded-full mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNd-lfaIM88wuiWl_jHYVow8ogjY1eXpFKw&usqp=CAU" />
                <Stack direction="column" justifyContent="flex-start" alignItems="fle-start"  >
                    <Typography children={count} className="text-[white] font-semibold" />
                    <Typography children={text} className="font-medium text-[13px] text-[#dfe6e9] " />
                </Stack>
            </Stack>
        </>
    );
}

export default HeroSectionComp;
