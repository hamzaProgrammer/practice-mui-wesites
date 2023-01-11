import React from 'react';
import {Box} from "@mui/material"

const ContentArea = ({children}) => {
  return (
    <>
        {/* <Box className="bg-[#f9ca24]  min-h-[100%]" > */}
        {/* <Box className="bg-[#020917]  min-h-[100%]" > */}
        <Box className="min-h-[100vh] in-w-[100%] bg-[#353b48] -mt-[75px] " >
            {children}
        </Box>
    </>
  );
}

export default ContentArea;
