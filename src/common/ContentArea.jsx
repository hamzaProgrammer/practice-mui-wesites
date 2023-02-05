import React , {useContext } from 'react';
import {Box} from "@mui/material"
import {ThemeContext} from "../App"

const ContentArea = ({children}) => {
  const [ theme , setTheme ] = useContext(ThemeContext)

  return (
    <>
          <Box className={`min-h-[100vh] ${theme ? "bg-[#05000D]" : "bg-[white]"} `} >
              {children}
          </Box>
    </>
  );
}

export default ContentArea;
