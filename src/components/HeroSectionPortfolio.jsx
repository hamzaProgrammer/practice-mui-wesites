import React from 'react';
import {Box} from '@mui/material'
import Typography from "../utils/Typography"
import Button from "../utils/Button"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const HeroSectionPortfolio = () => {
    const firstTextStyle = {
        color : "#dcdde1",
        fontSize : { xl : "30px" , lg : "20px" , md : "16px" , sm : "14px" , xs : "14px" },
        fontWeight: 500,
    }
    const secondTextStyle = {
        fontSize :{ xl : "65px" , lg : "40px" , md : "30px" , sm : "28px" , xs : "25px" },
        color : 'white',
        fontWeight : 600
    }
    const thirdTextStyle = {
        fontSize : { xl : "30px" , lg : "20px" , md : "16px" , sm : "14px" , xs : "14px" },
        color : "#dcdde1",
        fontWeight : 500
    }
    const firstButtonStyle = {
        color : "white",
        fontSize : {xl : "22px" , lg : "14px" , md : "12px" , sm : "12px" , xs : "12px"},
        backgroundColor : 'transparent',
        border : "1px solid #273c75",
        '&:hover' : {
            color : "#487eb0",
            border : "1px solid white",
        }
    }
    const secondButtonStyle = {
        color : "#182C61",
        fontSize : {xl : "22px" , lg : "14px" , md : "12px" , sm : "12px" , xs : "12px"},
        fontWeight : 600,
        backgroundColor : '#686de0',
        '&:hover' : {
            color : "white",
            fontWeight : 400,
            backgroundColor : 'transparent',
        }
    }
    const scrollTextStyle = {
        color : "#F8EFBA",
        fontWeight: 400,
        fontSize : "16px",
        marginBottom : {xl : "40px" , lg : "40px" , md : "40px" , sm : "40px" , xs : "0px"},
        transform : {lg:"rotate(90deg)" , md : "rotate(90deg)", sm : "rotate(90deg)" , xs : "rotate(0deg)"},
    }
    const iconStyles = {
        color : 'white',
        fontSize : "25px",
        marginBottom : "15px"
    }
    return (
        <div id="home">
            <Box className="max-w-[1240px] mx-auto flex flex-col justify-center items-center lg:pt-[100px] md:pt-[70px] pt-12" >
                <Typography children="Hello, I'm" sx={firstTextStyle} gutterBottom={true}  />
                <Typography children="Hamza Maqsood" sx={secondTextStyle} gutterBottom={true}  />
                <Typography children="Full Stack Developer" sx={thirdTextStyle} gutterBottom={true}  />
                <Box className="flex justify-between lg:min-w-[250px]  lg:max-w-[300px]  mx-auto mt-4" >
                    <Button children="Download CV" sx={firstButtonStyle} variant="outlined" id="basic-outlined" />
                    <Button children="Let's Talk" sx={secondButtonStyle} variant="text"  />
                </Box>
                <Box className="flex md:flex-row flex-col justify-between md:items-end items-center mt-8 lg:w-[900px] w-[700px] max-x-[320px]" >
                    <Box className="flex md:flex-col flex-row" >
                        <LinkedInIcon sx={iconStyles} />
                        <FacebookIcon sx={iconStyles} />
                        <YouTubeIcon sx={iconStyles} />
                    </Box>
                    <Box className="lg:max-w-[400px] max-w-[300px] rounded-md bg-[#575fcf] flex justify-center rounded-tl-full rounded-tr-full md:mb-0 mb-4" >
                        <img alt="hero imag" className="rounded-md max-w-[100%] object-cover" src="https://amazon-3l2.pages.dev/static/media/hero.7e2be00982208588722d.png" />
                    </Box>
                    <Typography children="Scroll Down" sx={scrollTextStyle} />
                </Box>
            </Box>
        </div>
    );
}

export default HeroSectionPortfolio;
