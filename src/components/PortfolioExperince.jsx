import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PortfolioServices = () => {
    const firsTextStyle = {
        color : 'white',
        fontSize : {xl : "14px" , lg : "12px" , md : "9px" , sm : "8px" , xs : "10px"},
        
    }
    const secondTextStyle = {
        color : '#3c40c6',
        fontWeight : 600,
        fontSize : {xl : "35px" , lg : "27px" , md : "18px" , sm : "15px" , xs : "18px"},
    }
    const mainTextStyle= {
        fontSize : {xl : "22px" , lg : "20px" , md: "17px" , sm : "15px" , xs : "13px" },
        fontWeight : 600,
        color : "#0abde3"
    }
    const iconStyle = {
        color : "#0abde3",
        fontSize :"15px",
        marginTop : {md:"7px" }
    }
    const descTextStyle= {
        color : "white",
        fontSize : {xl : "20px" , lg : "15px" , md : "13px" , sm : "13px" , xs : "13px"} ,

    }
    return (
        <div id="services" >
            <Box className="max-w-[1240px] mx-auto flex flex-col mt-8 md:p-2 p-1" >
                <Box className="max-w-[300px] mx-auto flex flex-col justify-center items-center" >
                    <Typography children="What I offer " gutterBottom={true} sx={firsTextStyle} />
                    <Typography children="Services" gutterBottom={true} sx={secondTextStyle} />
                </Box>
                <Box className="flex lg:flex-row flex-col mt-6 md:gap-2 gap-1 " >
                    <Box className="flex md:flex-row max-h-fit flex-col justify-between items-start lg:min-w-[66%] lg:max-w-[66%] min-w-[100%] md:gap-3 gap-1 " >
                        <Box className="flex flex-col justify-center items-center bg-[#5f27cd] md:min-w-[45%] min-w-[100%] rounded-bl-md rounded-br-md" >
                            <Box className="flex justify-center p-4 items-center rounded-bl-3xl  rounded-br-3xl bg-[#341f97] min-w-[100%]" >
                                <Typography children="UI/UX Design " gutterBottom={true} sx={mainTextStyle} />
                            </Box>
                            <Box className="flex flex-col p-5" >
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="flex flex-col justify-center items-center bg-[#5f27cd] md:min-w-[45%] min-w-[100%] rounded-bl-md rounded-br-md" >
                            <Box className="flex justify-center p-4 items-center rounded-bl-3xl rounded-br-3xl bg-[#341f97] min-w-[100%]" >
                                <Typography children="Web Development " gutterBottom={true} sx={mainTextStyle} />
                            </Box>
                            <Box className="flex flex-col p-5" >
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start items-start mb-2 gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                                <Box className="flex justify-start mb-2 items-start gap-2" >
                                    <CheckCircleOutlineIcon sx={iconStyle} />
                                    <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="flex flex-col h-max max-h-full lg:justify-start justify-center lg:items-start items-center bg-[#5f27cd] lg:min-w-[33%] lg:max-w-[33%] md:max-w-[40%] max-w-[100%] rounded-bl-md rounded-br-md" >
                        <Box className="flex justify-center p-4 items-center rounded-bl-3xl  rounded-br-3xl bg-[#341f97] min-w-[100%]" >
                            <Typography children="Content Creation " gutterBottom={true} sx={mainTextStyle} />
                        </Box>
                        <Box className="flex flex-col p-5 " >
                            <Box className="flex justify-start items-start mb-2 gap-2" >
                                <CheckCircleOutlineIcon sx={iconStyle} />
                                <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                            </Box>
                            <Box className="flex justify-start mb-2 items-start gap-2" >
                                <CheckCircleOutlineIcon sx={iconStyle} />
                                <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                            </Box>
                            <Box className="flex justify-start items-start mb-2 gap-2" >
                                <CheckCircleOutlineIcon sx={iconStyle} />
                                <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                            </Box>
                            <Box className="flex justify-start mb-2 items-start gap-2" >
                                <CheckCircleOutlineIcon sx={iconStyle} />
                                <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                            </Box>
                            <Box className="flex justify-start items-start mb-2 gap-2" >
                                <CheckCircleOutlineIcon sx={iconStyle} />
                                <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                            </Box>
                            <Box className="flex justify-start mb-2 items-start gap-2" >
                                <CheckCircleOutlineIcon sx={iconStyle} />
                                <Typography children=" Maecenas scelerisque   consequat libero sed elementum." gutterBottom={true} sx={descTextStyle} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default PortfolioServices;
