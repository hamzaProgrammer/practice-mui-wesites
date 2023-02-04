import React from 'react';
import {Stack} from "@mui/material"
import {Avatar , Typography , Button } from "../utils/"
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const OrderComponent = () => {
    return (
        <>
            <Stack direction={{ xs : "column" , sm : "row" ,  md:"row"}} justifyContent="flex-start" alignItems="center" className="bg-[white] p-5 curser-pointer drop-shadow-md  lg:max-w-[50%] max-w-full lg:min-w-[50%] w-full " >
                <Avatar src="https://ychef.files.bbci.co.uk/976x549/p07cj8zj.jpg" className="lg:max-w-[100px] lg:max-h-[100px] lg:min-w-[100px] lg:min-h-[100px] max-w-[70px] max-h-[70px] min-w-[70px] min-h-[70px] rounded-full cursor-pointer restaurant_image_new " />
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="bg-[white] p-5 min-w-[75%] curser-pointer pl-3" >
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" className="min-w-[100%]" >
                        <Typography children="5th Avenue New York" className="text-[crimson] xl:text-[17px] text-[15px] " />
                        <Stack direction="row" justifyContent="center" alignItems="center" className="bg-[#f1c40f] px-[5px] py-[2px] text-[white]" >
                            <StarRateIcon className="text-[20px]" />
                            <Typography children="4.25" className="text-[15px] font-semibold " />
                        </Stack>
                    </Stack>
                    <Typography children="Dominos" className="text-[#2f3542] xl:text-[20px] my-1 font-semibold text-[17px] " />
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" className="w-[100%] mt-4 max-w-[240px]  " >
                        <Stack direction="row" justifyContent="flex-start" alignItems="center" className="px-[5px] py-[2px] text-[#596275]" >
                            <AccessTimeIcon className="text-[20px]" />
                            <Typography children="min Order $50" className="md:text-[15px] text-[13px]  font-semibold pl-2" />
                        </Stack>
                        <Stack direction="row" justifyContent="flex-start" alignItems="center" className=" px-[5px] py-[2px] text-[#596275]" >
                            <DirectionsBikeIcon className="text-[20px]" />
                            <Typography children="20 Mins" className="md:text-[15px] text-[13px]  font-semibold pl-2" />
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" className="px-[5px] py-[2px] mt-5 text-[#596275]" >
                        <MonetizationOnIcon className="text-[20px]" />
                        <Typography children="Accepts cash &  online payments" className="md:text-[15px] text-[13px] font-semibold pl-2" />
                    </Stack>
                    <Button children="Order Now" className="bg-[#e15f41] text-white p-2 font-semibold capitalize rounded-none mt-10 hover:bg-[#e77f67]"  />
                </Stack>
            </Stack>
        </>
    );
}

export default OrderComponent;
