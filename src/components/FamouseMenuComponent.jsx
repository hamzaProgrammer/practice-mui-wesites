import React from 'react';
import { Stack } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Typography , Button} from "../utils"

const FamouseMenuComponent = ({bgImage , rating , likes , name , desc , price , restaurant , closingTime}) => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="xl:max-w-[380px] lg:max-w-[320px] md:max-w-[230px] max-w-[300px] xl:min-w-[380px] lg:min-w-[320px] md:min-w-[230px] min-w-[300px] drop-shadow-md bg-[white] md:mt-12 mt-4 " >
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" className="bg-[url('https://www.shutterstock.com/image-vector/fast-food-menu-template-fastfood-260nw-726432148.jpg')] max-w-full min-w-full max-h-[200px] h-[200px] bg-cover bg-no-repeat bg-center px-2 py-3" >
                    <Stack direction="row" justifyContent="center" alignItems="center" className="bg-[#f1c40f] px-[5px] py-[2px] text-[white]" >
                        <StarRateIcon className="text-[20px]" />
                        <Typography children="4.25" className="text-[15px] font-semibold " />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="bg-[black] px-[5px] text-[white] mt-auto py-[2px] " >
                        <FavoriteIcon className="text-[18px] mr-1" />
                        <Typography children="20" className="text-[16px] font-semibold " />
                    </Stack>
                </Stack>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="px-2 py-3 mt-4 mb-1" >
                    <Typography children="Maenonaam Thai Restaurant" className="xl:text-2xl lg:text-lg md:text-[15px] text-[15px] text-[#2f3640] font-semibold " />
                    <Typography children="Duis tincidunt consequat libero vel commodo. Nunc maximus tellus urna. " className="xl:tex-md lg:text-md md:text-[12px] text-[12px] text-[#57606f] font-medium mt-3 mb-3 " />
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" className="px-4 mb-2 w-[100%]" >
                    <Typography children="$0.85" className="xl:tex-lg lg:text-lg md:text-[13px] text-[18px] text-[#2f3640] font-semibold " />
                    <Button children="Add To Cart" className="bg-[black] text-[white] font-semibold capitalize lg:p-3 md:p-2 p-1 px-4 hover:bg-[#2f3542] rounded-none " />
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" className="px-4 mt-6 mb-2 w-[100%]" >
                    <img alt="restaurant logo" className="max-w-[50px] max-h-[50px] rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQQjURgfP8maGXQ6ETb7-dPBRuGqRq3N7DfwTMH5Y0g&s" />
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="pt-1" >
                        <Typography children="Fabio Er Ta Porto Restaurant" className="lg:text-md text-[11px] text-[#2f3640] font-medium " />
                        <Typography children="closes at 9pm sharp" className="md:text-md text-[13px] text-[crimson] font-medium " />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default FamouseMenuComponent;
