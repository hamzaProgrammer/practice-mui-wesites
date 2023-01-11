import React from 'react';
import {Stack , Box} from "@mui/material"
import Typography from "../utils/Typography"

const AdvanceHeroSection = () => {
    return (
        <>
            <Stack className="bg-[url(https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80)] pt-[70px] bg-center bg-no-repeat bg-cover min-h-screen " direction={{sm: "column" , md : "row"}} justifyContent="space-between" alignItems="center"  >
                <Stack className="max-w-[1240px] mx-auto xl:mb-0 w-[100%]" direction={{sm:"column" , md : "row"}} justifyContent="flex-start" alignItems="flex-start"  >
                    <Stack className="md:max-w-[50%] w-[100%] md:mt-[100px]" direction="column" justifyContent="center" alignItems="flex-start" >
                        <Box className="banner_main_box mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l w-[300px] border-4 border-yellow p-2" sx={{border: "0.5px solid white"}} >
                            <Typography children="Welcome to my Portfolio" className="text-[white] text-xl font-semibold " />
                        </Box>
                        <Typography children="Hi, I am Hamza" className="text-[white] mt-2 text-6xl font-semibold hover:cursor-pointer hover:translate-y-1 transition  ease-in-out duration-300 animate-bounce" />
                        <Typography children="Aenean efficitur est eu vestibulum consectetur. Vestibulum aliquam id odio eget lacinia. Nam ultricies feugiat justo sed efficitur. In risus urna, suscipit eu nibh eget, eleifend ultrices lectus. Nam sapien purus, venenatis a accumsan quis, eleifend id justo. In ut consectetur urna, id commodo ipsum. Donec et tincidunt velit, vitae suscipit tellus." className="text-[#dcdde1] leading-relaxed mt-2 text-sm font-medium " />
                    </Stack>
                    <Stack direction="column" className="md:max-w-[50%] w-[100%] " justifyContent="center" alignItems="center"   >
                        <img alt="svg logo" className="bg-[transaparent] xl:max-w-[400px] max-w-[300px] xl:max-h-[400px] max-h-[300px] bannerImage" src="https://amazon-3l2.pages.dev/static/media/hero.7e2be00982208588722d.png" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default AdvanceHeroSection;
