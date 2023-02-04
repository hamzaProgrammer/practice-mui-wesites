import React from 'react';
import {Stack} from "@mui/material"
import {Typography , Paper} from "../utils"

const TopRestaurants = () => {
    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[white] pt-8 pb-8 " >
                <Typography children="Website For Restaurants and Cafe" className="text-[crimson] md:text-2xl text-xl font-[Dancing-Script] italic  " />
                <Typography children="Top Restaurants" className="text-[black] md:text-3xl text-2xl font-extrabold " />
                <Typography children="In placerat malesuada imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec imperdiet mi at maximus tincidunt. Integer dui massa, dapibus et ipsum eget, tempor vulputate lacus." className="text-[#636e72] md:text-[13px] text-[11px] mt-3 md:max-w-[600px] max-w-[300px]" />
                <Stack direction={{xs: "column" , sm : "column" , lg  : "row" }} spacing={2} justifyContent="center" alignItems="center" className="mt-11" >
                    <Paper elevation={11} variant="outlined" className="p-4 cursor-pointer drop-shadow-md rounded-full" children={<img alt="logo" className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] rounded-full " src="https://github.com/sunil9813/Food-Order/blob/master/images/featured-restaurant-gallery1.jpg?raw=true" />} />
                    <Paper elevation={11} variant="outlined" className="p-4 cursor-pointer drop-shadow-md rounded-full" children={<img alt="logo" className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] rounded-full " src="https://github.com/sunil9813/Food-Order/blob/master/images/featured-restaurant-gallery2.jpg?raw=true" />} />
                    <Paper elevation={11} variant="outlined" className="p-4 cursor-pointer drop-shadow-md rounded-full" children={<img alt="logo" className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] rounded-full " src="https://github.com/sunil9813/Food-Order/blob/master/images/featured-restaurant-img1.jpg?raw=true" />} />
                    <Paper elevation={11} variant="outlined" className="p-4 cursor-pointer drop-shadow-md rounded-full" children={<img alt="logo" className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] rounded-full " src="https://github.com/sunil9813/Food-Order/blob/master/images/featured-restaurant-img2.jpg?raw=true" />} />
                    <Paper elevation={11} variant="outlined" className="p-4 cursor-pointer drop-shadow-md rounded-full" children={<img alt="logo" className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] rounded-full " src="https://github.com/sunil9813/Food-Order/blob/master/images/featured-restaurant-gallery1.jpg?raw=true" />} />
                    <Paper elevation={11} variant="outlined" className="p-4 cursor-pointer drop-shadow-md rounded-full" children={<img alt="logo" className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] rounded-full " src="https://github.com/sunil9813/Food-Order/blob/master/images/featured-restaurant-gallery1.jpg?raw=true" />} />
                </Stack>
            </Stack>
        </>
    );
}

export default TopRestaurants;
