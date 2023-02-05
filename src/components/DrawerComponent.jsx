import React from 'react';
import {Stack} from "@mui/material"
import {Button ,Typography} from "../utils"
import {DrawerIconStyle , DrawerStyle , iconTextStyle , iconStyle , ButtonStyle} from "./styles"

const DrawerComponent = () => {
    return (
        <>
            <Stack sx={DrawerStyle}  >
                <Stack sx={DrawerIconStyle}  >
                    <Typography children="Halux" className="text-[white] text-2xl font-semibold font-[Kalam]" sx={iconTextStyle}  />
                    <img style={iconStyle} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtldENwjAMRF83gAkYAdgANmAURmAkNgA2gA1gAtgA5CqR3Mi010r5a/7aOPcc5yw3VF5NZX3GABbAJSW0Bz5Kciogi2+S6B2QIArAiz8SYA1IkCFAKb5LgCsgQfoAkXiuu+1JkH+APvH8thIkAijiMqQEjBGXIB5QWnGpeh2ws+/Iwh5gtjNn5DXksLLPvu6HaW3tuxbgBrSWjrLMmUy9QefcDPAPHZZ2LtGkEj2BlTKtghibF3kotdvRGxyAU9HVCu8FHIGzDx7bTAqoE1Md8APjLkQZBPCBYQAAAABJRU5ErkJggg==" alt="logo-imag"  />
                </Stack>
                <Button children="Home" sx={ButtonStyle} />
                <Button children="Residences" sx={ButtonStyle} />
                <Button children="Value" sx={ButtonStyle} />
                <Button children="Contact" sx={ButtonStyle} />
            </Stack>
        </>
    );
}

export default DrawerComponent;
