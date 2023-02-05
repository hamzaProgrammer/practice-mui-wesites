import React , {useContext} from 'react';
import {ThemeContext} from "../App"
import {Stack} from "@mui/material"
import {Typography} from "../utils"
import PropertyComponent from "./PropertyComponent"
import { motion } from "framer-motion"


const BestChoices = () => {
    const [ theme , setTheme ] = useContext(ThemeContext)
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', bounce: 0.6 }}
            >
                <Stack direction="column" justifyContent={{xs : "center" , sm : "center" , md:"flex-start"}} alignItems={{xs : "center" , sm : "flex-start" , md:"flex-start"}} className="py-8 xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto px-4 mt-4 " >
                    <Typography children="Best Choice" className="text-[#eb4d4b] xl:text-lg lg:text-[15px] md:text-[14px] text-[13px]  " />
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" >
                        <Typography children="Popular Residences" className={`${theme ? "text-[white]" : "text-[#2C3A47]"}  xl:text-3xl lg:text-2xl md:text-lg text-md lg:pt-1 md:pt-0 pt-0 font-semibold `} />
                        <span className="text-[#eb4d4b] xl:text-4xl lg:text-3xl md:text-lg text-md  md:pt-0 pt-1" >.</span>
                    </Stack>
                    <Stack direction={{ xs : "column", sm : "row" , md:"row"}} spacing={{xs : 0 , sm : 5 , md : 9 , lg : 12,}} justifyContent={{xs : "center" , sm : "flex-between", md:"flex-between"}} alignItems={{xs : "center" , sm : "flex-start", md:"flex-start"}} >
                        <PropertyComponent />
                        <PropertyComponent />
                        <PropertyComponent />
                    </Stack>
                </Stack>
            </motion.div>
        </>
    );
}

export default BestChoices;
