import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"
import Paper from "../utils/Paper"
import MuseumIcon from '@mui/icons-material/Museum';


const PortfolioAboutMe = () => {
    const firsTextStyle = {
        color : 'white',
        fontSize : {xl : "14px" , lg : "12px" , md : "9px" , sm : "8px" , xs : "10px"},
    }
    const secondTextStyle = {
        color : '#3c40c6',
        fontWeight : 600,
        fontSize : {xl : "35px" , lg : "27px" , md : "18px" , sm : "15px" , xs : "18px"},
    }
    const paperStyle= {
        //marginRight : {xl: "25px" , lg : "25px" , md : "0px" , sm : "0px" , xs : "0px"}
        backgroundColor : "transparent",
        minWidth : "125px",
        minHeight : {sm: "145px" }
    }
    const iconStyle = {
        color : "#5f27cd",
        marginBottom : "15px"
    }
    const paperTextStyle = {
        color : 'white',
        fontWeight : 600,
        fontSize : "14px"
    }
    const paperSecondTextStyle = {
        color : '#c8d6e5',
        fontWeight : 400,
        marginTop : "10px", 
        fontSize : "10px"
    }
    const descTextStyle = {
        fontWeight : 500,
        color : "#c8d6e5",
        marginTop : "20px",
        paddingX : {md: "15px" , sm : "0px"},
        fontSize : {xl : "17px" , lg : "15px" , md: "15px" , sm : "12px" , xs : "10px"},
    }

    // first paper data
    const FirstPaperData = () => {
        return (
            <Box className="flex flex-col justify-center items-center bg-[#130f40] rounded-md lg:p-6 p-4 md:mb-0 mb-2" >
                <MuseumIcon sx={iconStyle} />
                <Typography children="Experience" gutterBottom={true} sx={paperTextStyle} />
                <Typography children="3+ years working" gutterBottom={true} sx={paperSecondTextStyle} />
            </Box>
        )
    }
    // second paper data
    const SecondPaperData = () => {
        return (
            <Box className="flex flex-col justify-center items-center bg-[#130f40] rounded-md lg:p-6 p-4 md:mb-0 mb-2" >
                <MuseumIcon sx={iconStyle} />
                <Typography children="Clents" gutterBottom={true} sx={paperTextStyle} />
                <Typography children="200+ Wordlwide" gutterBottom={true} sx={paperSecondTextStyle} />
            </Box>
        )
    }
    // third paper data
    const ThirdPaperData = () => {
        return (
            <Box className="flex flex-col justify-center items-center bg-[#130f40] rounded-md lg:p-6 p-4 md:mb-0 mb-2" >
                <MuseumIcon sx={iconStyle} />
                <Typography children="Projects" gutterBottom={true} sx={paperTextStyle} />
                <Typography children="450+ Completed" gutterBottom={true} sx={paperSecondTextStyle} />
            </Box>
        )
    }

    return (
        <div id="about" >
            <Box className="max-w-[1240px] mx-auto flex flex-col lg:mt-[100px] mt-8" >
                <Box className="max-w-[200px] mx-auto flex flex-col justify-center items-center" >
                    <Typography children="Get To Know" gutterBottom={true} sx={firsTextStyle} />
                    <Typography children="About Me" gutterBottom={true} sx={secondTextStyle} />
                </Box>
                <Box className="flex flex-col md:flex-row mt-6" >
                    <Box className="flex flex-row justify-center items-center md:min-w-[45%] w-[100%]" >
                        <img className="lg:max-h-[400px] md:max-h-[300px] max-h-[250px] mx-auto rounded-md object-cover max-w-[90%] transform skew-x-12 " alt="imag" src="https://img.freepik.com/premium-photo/beautiful-young-woman-model-with-clean-fresh-skin-blue-background-face-care-plastic-cosmetology_555986-641.jpg?w=2000" />
                    </Box>
                    <Box className="flex flex-col justify-center items-center min-w-[55%] p-4" >
                        <Box className="flex md:flex-row flex-col justify-between items-center xl:gap-16 lg:gap-12 md:gap-1" >
                            <Paper children={<FirstPaperData />} elevation={1} sx={paperStyle} />
                            <Paper children={<SecondPaperData />} elevation={1} sx={paperStyle} />
                            <Paper children={<ThirdPaperData />} elevation={1} sx={paperStyle} />
                        </Box>
                        <Typography children="Suspendisse lacinia suscipit leo vel pretium. Vestibulum a lacinia quam, a faucibus sapien. Cras quis massa porttitor, iaculis odio at, egestas eros. Nulla vel eleifend ante. Phasellus eu facilisis diam. Vivamus id finibus odio, et sodales mauris. Curabitur dictum euismod sapien, ac blandit mauris porta ac. Curabitur sem lorem, rhoncus sit amet blandit quis, faucibus vel purus. " gutterBottom={true} sx={descTextStyle} />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default PortfolioAboutMe;
