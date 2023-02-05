import React , {useContext} from 'react';
import {ThemeContext} from "../App"
import {Stack , Accordion  , AccordionSummary , AccordionDetails , Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Typography} from "../utils"
import DangerousIcon from '@mui/icons-material/Dangerous';

const OurValues = () => {
    const [ theme , setTheme ] = useContext(ThemeContext)
    return (
        <>
            <Stack direction={{ sm : "row" , md : "row" , lg: "row"}} justifyContent="space-between" className=" xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto py-4 w-full md:pt-10 mt-6 md:h-[600px]" >
                <Box className="rounded-t-full border-t-4 bg-[#a4b0be] xl:ml-0 lg:ml-3 md:mb-0 mb-4 xl:min-w-[40%] lg:min-w-[40%] md:min-h-[full] lg:w-[350px] mx-auto min-h-[400px] md:mt-0 mt-6 flex justify-start " >
                    <img alt="our values icon" className="rounded-t-full border-t-2 md:min-h-full min-h-[400px] object-cover xl:min-w-[100%] lg:w-[100%] md:w-[300px] w-[300px] pt-4 px-3 " src="http://cdn.home-designing.com/wp-content/uploads/2017/10/white-sectional-sofa.jpg"  />
                </Box>
                <Stack direction="column" justifyContent={{xs : "center" , sm : "flex-start" , md:"flex-start"}} alignItems={{xs : "center" , sm : "flex-start" , md:"flex-start"}} className="md:min-w-[50%] md:max-w-[50%] sm:min-w-full" >
                    <Typography children="Our Values" className="text-[#eb4d4b] xl:text-lg lg:text-[15px] md:text-[14px] text-[13px]  " />
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" >
                        <Typography children="Values We Give To You" className={`${theme ? "text-[white]" : "text-[#2f3640]"} xl:text-[45px] lg:text-4xl md:text-2xl text-md lg:pt-1 md:pt-0 pt-0 font-semibold `} />
                        <span className="text-[#eb4d4b] xl:text-[45px] lg:text-4xl md:text-2xl text-md  md:pt-0 pt-1" >.</span>
                    </Stack>
                    <Typography children="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." className={`${theme ? "text-[#8395a7]" : "text-[#2f3640]"}  xl:text-[16px] lg:text-[13px] md:text-[13px] text-[12px] lg:pt-1 pt-2 md:pl-2 pl-5 md:px-0 px-6 `} />
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="mt-4 px-2" spacing={{ xs : 3}} >
                        <Accordion className={`${theme ? "bg-[#333038]" : "bg-[white]"} ${theme ? "text-[white]" : "text-[#2f3640]"}` }>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className={`${theme ? "text-[#546de5]" : "text-[black]"} font-bold ${theme ? "bg-[#303952] " : "bg-[white] "} rounded-sm`} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing="1" >
                                    <DangerousIcon className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"}  font-bold  xl:text-2xl md:text-xl md:text-md text-[15px] mt-1 mr-1`} />
                                    <Typography children="Accordion 1" className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"} font-semibold xl:text-[19px] md:text-lg md:text-md text-[15px] pt-1`} />
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography children=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." className={`${theme ? "text-[white]" : "text-[#2f3640]"}  xl:text-[16px] text-[12px]`} />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={`${theme ? "bg-[#333038]" : "bg-[white]"} ${theme ? "text-[white]" : "text-[#2f3640]"}` }>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className={`${theme ? "text-[#546de5]" : "text-[black]"} font-bold ${theme ? "bg-[#303952] " : "bg-[white] "} rounded-sm`} />}
                                aria-controls="panel1a-content1"
                                id="panel1a-header1"
                            >
                                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing="1" >
                                    <DangerousIcon className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"}  font-bold  xl:text-2xl md:text-xl md:text-md text-[15px] mt-1 mr-1`} />
                                    <Typography children="Accordion 2" className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"} font-semibold xl:text-[19px] md:text-lg md:text-md text-[15px] pt-1`} />
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography children=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." className={`${theme ? "text-[white]" : "text-[#2f3640]"}  xl:text-[16px] text-[12px]`} />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={`${theme ? "bg-[#333038]" : "bg-[white]"} ${theme ? "text-[white]" : "text-[#2f3640]"}` }>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className={`${theme ? "text-[#546de5]" : "text-[black]"} font-bold ${theme ? "bg-[#303952] " : "bg-[white] "} rounded-sm`} />}
                                aria-controls="panel1a-content2"
                                id="panel1a-header2"
                            >
                                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing="1" >
                                    <DangerousIcon className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"}  font-bold  xl:text-2xl md:text-xl md:text-md text-[15px] mt-1 mr-1`} />
                                    <Typography children="Accordion 3" className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"} font-semibold xl:text-[19px] md:text-lg md:text-md text-[15px] pt-1`} />
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography children=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." className={`${theme ? "text-[white]" : "text-[#2f3640]"}  xl:text-[16px] text-[12px]`} />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={`${theme ? "bg-[#333038]" : "bg-[white]"} ${theme ? "text-[white]" : "text-[#2f3640]"}` }>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className={`${theme ? "text-[#546de5]" : "text-[black]"} font-bold ${theme ? "bg-[#303952] " : "bg-[white] "} rounded-sm`} />}
                                aria-controls="panel1a-content3"
                                id="panel1a-header3"
                            >
                                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing="1" >
                                    <DangerousIcon className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"}  font-bold  xl:text-2xl md:text-xl md:text-md text-[15px] mt-1 mr-1`} />
                                    <Typography children="Accordion 4" className={`${theme ? "text-[#546de5]" : "text-[#2f3640]"} font-semibold xl:text-[19px] md:text-lg md:text-md text-[15px] pt-1`} />
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography children=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." className={`${theme ? "text-[white]" : "text-[#2f3640]"}  xl:text-[16px] text-[12px]`} />
                            </AccordionDetails>
                        </Accordion>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default OurValues;
