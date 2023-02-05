import React , {useContext} from 'react';
import {ThemeContext} from "../App"
import {Stack , Box } from "@mui/material"
import {Typography} from "../utils"
import ContactUsComponent from "./ContactUsComponent"

const OurValues = () => {
    const [ theme , setTheme ] = useContext(ThemeContext)
    return (
        <>
            <Stack direction={{ sm : "row" , md : "row" , lg: "row"}} justifyContent="space-between" className=" xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto py-4 w-full md:pt-10 mt-10 md:h-[600px]" >
                <Stack direction="column" justifyContent={{xs : "center" , sm : "flex-start" , md:"flex-start"}} alignItems={{xs : "center" , sm : "flex-start" , md:"flex-start"}} className="md:min-w-[50%] md:max-w-[50%] sm:min-w-full px-2" >
                    <Typography children="Contact Us" className={`${theme ? "text-[#eb4d4b]" : "text-[#2f3640]" } xl:text-lg lg:text-[15px] md:text-[14px] text-[13px]`} />
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" >
                        <Typography children="Easy To Contact Us" className={`${theme ? "text-[white]" : "text-[#2f3640]" }  xl:text-[45px] lg:text-4xl md:text-2xl text-md lg:pt-1 md:pt-0 pt-0 font-semibold `} />
                        <span className={`text-[#eb4d4b] xl:text-[45px] lg:text-4xl md:text-2xl text-md  md:pt-0 pt-1`} >.</span>
                    </Stack>
                    <Typography children="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="text-[#8395a7] xl:text-[16px] lg:text-[13px] md:text-[13px] text-[12px] lg:pt-1 pt-2 md:pl-2 pl-5 md:px-0 px-6 mt-6" />
                    <Stack spacing={{xs : 1, md: 5}} direction={{xs : "column" , sm : "row" , md : "row"}} justifyContent={{xs : "center", sm : "space-between", md:"space-between"}} alignItems={{xs : "center", sm : "space-between", md:"space-between"}} className="px-2 md:mt-8 mt-2 xl:ml-10 xl:w-[500px] md:w-[400px] mx-auto " >
                        <ContactUsComponent />
                        <ContactUsComponent />
                    </Stack>
                    <Stack spacing={{xs : 1, md: 5}} direction={{xs : "column" , sm : "row" , md : "row"}} justifyContent={{xs : "center", sm : "space-between", md:"space-between"}} alignItems={{xs : "center", sm : "space-between", md:"space-between"}} className="px-2 md:mt-8 mt-2 xl:ml-10 xl:w-[500px] md:w-[400px] mx-auto " >
                        <ContactUsComponent />
                        <ContactUsComponent />
                    </Stack>
                </Stack>
                <Box className="rounded-t-full border-t-4 bg-[#a4b0be] md:mb-0 mb-4 md:ml-10 ml-3 xl:min-w-[45%] lg:min-w-[45%] md:min-h-[full] lg:w-[350px] mx-auto min-h-[400px] md:mt-0 mt-6 flex justify-start " >
                    <img alt="our values icon" className="rounded-t-full border-t-2 md:min-h-full min-h-[400px] object-cover xl:min-w-[100%] lg:w-[100%] md:w-[300px] w-[300px] pt-4 px-3 " src="https://www.anyplace.com/_next/image?url=%2Fhome%2Fanyplace-standard-room.jpg&w=1280&q=75"  />
                </Box>
            </Stack>
        </>
    );
}

export default OurValues;
