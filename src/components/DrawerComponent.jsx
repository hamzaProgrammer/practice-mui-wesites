import React from 'react';
import {Stack} from "@mui/material"
import {Button ,Typography} from "../utils"
import {DrawerIconStyle , DrawerStyle , iconTextStyle , iconStyle , ButtonStyle , ButtonStyleNew} from "./styles"
import Logo from "../assets/images/gym-logo.png"

const DrawerComponent = () => {
    return (
        <>
            <Stack sx={DrawerStyle}  >
                <Stack sx={DrawerIconStyle}  >
                    <img style={iconStyle} src={Logo} alt="logo-imag"  />
                    <Typography children="Berotet" sx={iconTextStyle}  />
                </Stack>
                <Button children="Home" sx={ButtonStyle} />
                <Button children="Program" sx={ButtonStyle} />
                <Button children="Contact Us" sx={ButtonStyle} />
                <Button children="Register Now" sx={ButtonStyleNew} />
            </Stack>
        </>
    );
}

export default DrawerComponent;
