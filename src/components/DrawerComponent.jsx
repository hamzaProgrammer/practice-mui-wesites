import React from 'react';
import {Stack} from "@mui/material"
import {Button ,Typography} from "../utils"
import {DrawerIconStyle , DrawerStyle , iconTextStyle , iconStyle , ButtonStyle} from "./styles"

const DrawerComponent = () => {
    return (
        <>
            <Stack sx={DrawerStyle}  >
                <Stack sx={DrawerIconStyle}  >
                    <img style={iconStyle} src="https://www.freeiconspng.com/thumbs/coffee-icon-png/coffee-icon-png-2.png" alt="logo-imag"  />
                    <Typography children="Cofeto" sx={iconTextStyle}  />
                </Stack>
                <Button children="Home" sx={ButtonStyle} />
                <Button children="About" sx={ButtonStyle} />
                <Button children="Shops" sx={ButtonStyle} />
                <Button children="Testimonial" sx={ButtonStyle} />
            </Stack>
        </>
    );
}

export default DrawerComponent;
