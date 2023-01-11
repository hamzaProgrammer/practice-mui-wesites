import React from 'react';
import Button from "../utils/Button"
import {Box} from "@mui/material"
import IconButton from "../utils/IconButton"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from "../utils/Typography"

const Footer = () => {
  const buttonStyle = {
    color : "white",
    fontWeight : 600,
    marginRight : "25px"
  }
  const iconStyle= {
    fontSize : "25px",
    borderRadius : "50%",
    border : "1px solid white",
    color : "white",
    marginRight : "30px"
  }
  const textStyle= {
    color : "#95afc0",
    fontSize : "12px",
    paddingLeft : "10px",
    paddingRight : "10px"
  }
    return (
      <>
        <Box className="flex flex-col md:h-[300px] h-[350px] bg-[#020917] pt-12  " >
            <Box className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-[600px]" >
                <Box className="flex justify-between items-center " >
                  <Button children="Home" variant="text" sx={buttonStyle} />
                  <Button children="About" variant="text" sx={buttonStyle} />
                </Box>
                <Box className="flex justify-between items-center md:mt-0 mt-4" >
                  <Button children="Contact" variant="text" sx={buttonStyle} />
                  <Button children="Gallery" variant="text" sx={buttonStyle} />
                </Box>
            </Box>
            <Box className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-[600px] mt-8" >
                <Box className="flex justify-between items-center " >
                  <IconButton Icon={<FacebookIcon />} variant="outlined" sx={iconStyle} />
                  <IconButton Icon={<InstagramIcon />} variant="outlined" sx={iconStyle} />
                </Box>
                <Box className="flex justify-between items-center md:mt-0 mt-4" >
                  <IconButton Icon={<TwitterIcon />} variant="outlined" sx={iconStyle} />
                  <IconButton Icon={<LinkedInIcon />} variant="outlined" sx={iconStyle} />
                </Box>
            </Box>
            <Box className="flex flex-col mx-auto max-w-[500px] mt-7" >
              <Typography children="Kaikki Lorem Ipsum-generaattorit Internetissä tuntuvat toistavan ennalta määriteltyjä palasia tarpeen mukaan, tehden tästä ensimmäisen aidon generaattorin Internetissä." sx={textStyle}  />
            </Box>
        </Box>
      </>
    );
}

export default Footer;
