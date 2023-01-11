import React from 'react';
import {Stack , Box , useMediaQuery  } from "@mui/material"
import Button from "../utils/Button"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const AdvanceHeader = () => {
    const medium = useMediaQuery('(min-width:828px)')
    return (
        <>
            <Box className="min-w-[100%]" >
                <Stack className="max-w-[1240px] px-2 mx-auto md:py-2 mt-2 py-0 w-[100%] bg-[pink] " direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
                    <Box className="w-1/4 " >
                        <img alt="logo" className="max-w-[150px] max-h-[50px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4y2MOv6LlyG36Fu9ZMLh3hK4fKSDXJNUQhw&usqp=CAU" />
                    </Box>
                    <Box className="flex justify-end items-center lg:w-[80%] w-[70%]" >
                        {
                            medium === true ? (
                                <Stack className="md:block hidden md:min-w-[50%]" spacing={4} direction="row" justifyContent="center" alignItems="center" >
                                    <Button children="Home" disableRipple={true} className="capitalize text-[white] font-semibold bg-[inherit]  " />
                                    <Button children="Contact Us" disableRipple={true} className="capitalize text-[white] font-semibold bg-[inherit]  " />
                                    <Button children="About" disableRipple={true} className="capitalize text-[white] font-semibold bg-[inherit]  " />
                                </Stack>
                            ) : (
                                null
                            )
                        }
                        {
                            medium === true ? (
                                <Stack className="md:flex hidden md:min-w-[15%] " justifyContent="space-between" alignItems="center" direction="row" spacing={2}  >
                                    <InstagramIcon size="40px" className="ring-offset-1 ring-1 ring-white p-2 text-4xl text-[white] rounded-3xl" />
                                    <FacebookIcon size="40px" className="ring-offset-1 ring-1 ring-white p-2 text-4xl text-[white] rounded-3xl" />
                                    <TwitterIcon size="40px" className="ring-offset-1 ring-1 ring-white p-2 text-4xl text-[white] rounded-3xl" />
                                </Stack>
                            ) : (
                                null
                            )
                        }
                        <Stack className="md:min-w-[25%] text-center  " justifyContent="flex-end" alignItems="center" direction="row" spacing={2}  >
                            <Button children="Let's Connect" disableRipple={true} className="capitalize md:text-md text-sm p-3 px-10 text-[white] font-semibold bg-[inherit] ring-offset-1 ring-1 ring-white hover:ring-offset-0 " />
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default AdvanceHeader;
