import React from 'react';
import {Stack} from "@mui/material"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Typography , Button } from "../utils"

const ContactUsComponent = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="bg-[#636e72] rounded-md lg:p-4 md:p-3 p-6 " >
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" className="p-2" >
                    <LocalPhoneIcon className="bg-[#303952] text-[#546de5]  w-[35px] h-[35px] p-1 rounded-md mr-1"  />
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" >
                        <Typography children="Call" className="font-semibold text-[white] xl:text-[13px] text-[12px]" />
                        <Typography children="0336 5454564" className="font-normal text-[white] text-[12px]" />
                    </Stack>
                </Stack>
                <Button children="Call Now" className="text-[#546de5] font-semibold text-[11px] mt-4 lg:px-6 md:px-4 px-4 capitalize mx-auto bg-[#303952] hover:bg-[transparent] hover:text-[white]" />
            </Stack>
        </>
    );
}

export default ContactUsComponent;
