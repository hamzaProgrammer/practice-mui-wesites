import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"
import TaskAltIcon from '@mui/icons-material/TaskAlt';


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
    const mainTextStyle = {
        color : '#25CCF7',
        fontWeight: 600,
        marginTop : "15px",
        marginBottom : "15px",
        fontSize : {xl : "22px" , lg : "19px" , md : "16px" , sm : "15px" , xs : "15px"},
    }
    const iconStyle = {
        color : "#1B9CFC",
        fontSize : "14px",
        marginTop : "5px",
        marginRight : "10px"
    }
    const skillTextStyle= {
        color : "white",
        fontWeight : 600,
        fontSize : {xl : "17px" , lg : "16px" , md : "15px" , sm :"12px" , xs : "12px"  },
    }
    const skillDescTextStyle = {
        color : "#c8d6e5",
        fontWeight : 400,
        fontSize : {xl : "17px" , lg : "15px" , md : "13px" , sm : "12px" , xs : "12px" },
    }
    return (
        <div id="experience" >
            <Box className="max-w-[1240px] mx-auto flex flex-col mt-8" >
                <Box className="max-w-[300px] mx-auto flex flex-col justify-center items-center" >
                    <Typography children="What Skills I Have" gutterBottom={true} sx={firsTextStyle} />
                    <Typography children="My Experience" gutterBottom={true} sx={secondTextStyle} />
                </Box>
                <Box className="flex flex-col md:flex-row mt-6" >
                    <Box className="flex flex-col justify-center items-center md:min-w-[45%] w-[100%] rounded-md bg-[#341f97] md:m-6 m-0 md:mb-0 mb-2 p-4" >
                        <Typography children="Frontend Development" gutterBottom={true} sx={mainTextStyle} />
                        <Box className="lg:w-[350px] md:w-[280px] w-[250px] mx-auto flex flex-col" >
                            <Box className="flex min-w-[100%] justify-between mb-6 " >
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="HTML" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="CSS" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex min-w-[100%] justify-between mb-6" >
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Javascript" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Bootstrap" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex min-w-[100%] justify-between mb-6" >
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Tailwind" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="React js" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="flex flex-col justify-center items-center md:min-w-[45%] w-[100%] rounded-md bg-[#341f97] md:m-6 m-0 md:mb-0 mb-2 p-4" >
                        <Typography children="Backend Development" gutterBottom={true} sx={mainTextStyle} />
                        <Box className="lg:w-[350px] md:w-[280px] w-[250px] mx-auto flex flex-col" >
                            <Box className="flex min-w-[100%] justify-between mb-6 " >
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Node js" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Mongo DB" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex min-w-[100%] justify-between mb-6" >
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="PHP" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Mysql" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex min-w-[100%] justify-between mb-6" >
                                <Box className="flex items-start justify-between" >
                                    <TaskAltIcon style={iconStyle} />
                                    <Box className="flex flex-col justify-start " >
                                        <Typography children="Python" gutterBottom={true} sx={skillTextStyle} />
                                        <Typography children="Experienced" gutterBottom={true} sx={skillDescTextStyle} />
                                    </Box>
                                </Box>
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default PortfolioServices;
