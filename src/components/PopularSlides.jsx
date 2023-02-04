import React from 'react';
import {Stack} from "@mui/material"
import {Typography} from "../utils"

const PopularSlides = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="bg-[white] pb-4 mt-10 mb-10 curser-pointer lg:max-w-[30%] md:w-[420px] w-[300px] drop-shadow-md" >
                <img alt="menu imag" className="max-w-[100%] min-w-[100%] max-h-[200px] object-cover" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/thali-indian-1296x728-header.jpg?w=1155&h=1528" />
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" className="px-4 mt-6 mb-2 min-w-[100%]" >
                    <img alt="restaurant logo" className="max-w-[100%] min-w-[1/3] max-h-[50px] rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQQjURgfP8maGXQ6ETb7-dPBRuGqRq3N7DfwTMH5Y0g&s" />
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="pt-1 ml-4 min-w-[2/3]" >
                        <Typography children="Fabio Er Ta Porto Restaurant" className="lg:text-[17px] text-[11px] text-[#2f3640] font-semibold " />
                        <Typography children="Venue New York" className="md:text-md text-[13px] text-[#2f3542] font-medium " />
                    </Stack>
                </Stack>
                <Stack direction="column" justifyContent="center" alignItems="center" className="pt-1 min-w-[100%]  mt-4 " >
                    <Typography children="Fabio Er Ta Porto Restaurant" className="lg:text-[17px] text-[15px] text-[#2f3640] font-semibold " />
                    <Typography children="$10 - $13" className="md:text-md text-[13px] text-[crimson] font-medium" />
                </Stack>
            </Stack>
        </>
    );
}

export default PopularSlides;
