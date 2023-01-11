import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"

const PortfolioHeader = () => {
    const logoStyle = {
        fontWeight : 600,
        color : "white",
        fontSize : "18px"
    }
    return (
        <>
            {/* <Box className="flex max-w-[1240px] mx-auto p-4 bg-[]" >
                <Box className="flex justify-between " >
                    <img alt="logo" className="max-w-[100px] max-h-[50px] rounded-md " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRi_znVsc4QSvTQiFci8fdxiaZTsvidzh7A&usqp=CAU" />
                    <Typography children="JS DEV" sx={logoStyle} />
                </Box>
            </Box> */}
        </>
    );
}

export default PortfolioHeader;
