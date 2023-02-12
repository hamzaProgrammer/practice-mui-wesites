import React from 'react';
import {Box , Stack} from "@mui/material"
import {Button, Typography} from "../utils"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from "../assets/images/gym04.png"
import HeroImage from "../assets/images/gym06.png"


const HeroSection = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="min-w-[100%] " >
                <Stack direction={{xs: "column" , sm : "row"}} justifyContent={{xs: "column" , sm : "space-between"}} alignItems={{xs: "column" , sm : "flex-start" }} className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] xl:mt-12 lg:mt-6 mt-6" >
                    <Stack direction="column" justifyContent={{xs: "center", sm:"flex-start"}} alignItems={{xs: "center", sm:"flex-start"}} className="min-w-[50%] p-2 md:pt-12 pt-0"  >
                        <Typography children="Exercise is the key to a" className="text-xl xl:text-4xl lg:txt-3xl md:text-2xl text-[#2f3640] md:mt-12 mt-2" />
                        <Box className="flex md:mt-2 mt-1" >
                            <Typography children="Healthy" className="text-xl xl:text-4xl lg:txt-3xl md:text-2xl text-[#3742fa]  mr-2" />
                            <Typography children="Lifestyle" className="text-xl xl:text-4xl lg:txt-3xl md:text-2xl text-[#2f3640] " />
                        </Box>
                        <Typography children="Maecenas interdum elit interdum, sagittis mi eget, fringilla tellus. Ut nec nulla id enim porta ornare ut eu libero." className="text-[11px] xl:text-md lg:text-[13px] md:text-[12px] text-[#747d8c] md:mt-6 mt-4 xl:max-w-[60%] lg:max-w-[70%] md:max-w-[60%] w-full md:px-2 px-6 xl:mb-12 mb-6" />
                        <Box className="flex mt-2" >
                            <Button children="Get Started" className="text-[white] bg-[#3742fa] md:px-6 px-4 md:h-[35px] h-[27px] capitalize font-semibold hover:bg-[transparent] hover:text-[#3742fa] heroBtn md:text-[13px] text-[11px]  mr-2" /> 
                            <Button children="Watch Video" StartIcon={<PlayCircleIcon  />} className="text-[#57606f] bg-[transparent] px-4 md:h-[35px] h-[27px] capitalize font-semibold hover:bg-[transparent] hover:text-[#3742fa] heroBtn md:text-[13px] text-[11px] " />
                        </Box>
                    </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="flex-start" className="bg-[transparent] md:min-w-[50%] p-2 md:pt-12 pt-6 pb-8"  >
                        <Stack direction="row" justifyContent="center" alignItems="flex-start" className="w-full"  >
                            <img className="lg:max-w-[35px] max-w-[30px] lg:max-h-[35px] max-h-[30px] mb-1 bg-[#ff4757] p-1 rounded-md mr-1" src={Logo} alt="logo-imag"  />
                            <Box className="flex flex-col justify-center items-center w-[250px]" >
                                <Box className="rounded-full box01 z-10" >
                                    <Box className="rounded-full box02 z-10" >
                                        <Box className="rounded-full box03 z-10" >
                                            <img className="md:max-w-[300px] max-w-[250px] md:h-[300px] h-[250px] bg-[transparent] z-20" src={HeroImage} alt="logo-imag"  />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Stack direction="column" justifyContent="center" alignItems="center" className="lg:p-4 p-2 rounded-md bg-[white] z-50 shadow-lg lg:ml-0 -ml-10" >
                                <LocationOnIcon className="lg:w-[35px] w-[27px] lg:h-[35px] h-[27px] mb-1 text-[#3742fa] p-1 rounded-md mr-1"  />
                                <Typography children="Find a new" className="text-md lg:text-[12px]  text-[8px] font-normal text-[#2f3640] rightSecText " />
                                <Typography children="gym for you" className="text-md lg:text-[12px]  text-[8px] font-normal text-[#2f3640] rightSecText" />
                            </Stack>
                        </Stack>
                        <Stack direction="column" justifyContent="center" alignItems="center" className="lg:p-4 p-2 rounded-md bg-[white] z-50  md:-mt-[120px] -mt-[100px] lg:ml-6 md:ml-0" >
                            <Typography children="Heart Rate" className="text-md lg:text-[12px] md:text-[9px] text-[12px] font-normal text-[#2f3640]" />
                            <FavoriteIcon className="lg:w-[35px] md:w-[27px] lg:h-[35px] md:h-[27px] mb-1 text-[#3742fa] p-1 rounded-md mr-1"  />
                            <Typography children="2567 BPM" className="text-md lg:text-[12px] md:text-[9px] text-[12px] font-normal  text-[#2f3640]" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default HeroSection;
