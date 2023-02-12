import React from 'react';
import {Stack} from "@mui/material"
import {Typography} from "../utils"


const UserTestimonial = ({username , image}) => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" className="bg-[white] shadow-2xl p-2" >
                <img className="max-h-[200px] max-w-[280px] object-cover" alt="user imag" src={image} />
                <Typography children={username} className="text-[14px] md:text-lg text-[#2C3A47]" />
                <Typography children="Maecenas interdum elit interdum, sagittis mi eget, fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero." className="text-[11px] xl:text-md lg:text-[13px] md:text-[12px] text-[#747d8c] mt-2 text-center xl:max-w-[80%] lg:max-w-[70%] md:max-w-[60%] w-[80%] md:px-2 px-6 xl:mb-12 mb-6" />
            </Stack>
        </>
    );
}

export default UserTestimonial;
