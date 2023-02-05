import React from 'react';
import {Stack} from "@mui/material"
import { motion } from "framer-motion"

const SponserCompanies = () => {
    return (
        <>
            <Stack direction={{ xs : 'column' , sm : "row" , md:"row"}} spacing={1} justifyContent="center" alignItems="center" className=" xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto mt-12 pb-4 pt-6 mb-4 " >
                <motion.div
                    whileHover = {{
                        scaleX : 1.3 , originX : 0 ,
                    }}
                >
                    <img alt="company logo" className="lg:max-w-[200px] md:max-w-[180px] max-w-[150px] max-h-[200px] object-cover bg-[#2f3542] rounded-md opacity-25 hover:opacity-100 sponser_image  " src="https://e7.pngegg.com/pngimages/14/790/png-clipart-travel-company-logo.png" />
                </motion.div>
                <img alt="company logo" className="lg:max-w-[200px] md:max-w-[180px] max-w-[150px] max-h-[200px] object-cover bg-[#2f3542] rounded-md opacity-25 hover:opacity-100 sponser_image  " src="https://e7.pngegg.com/pngimages/14/790/png-clipart-travel-company-logo.png" />
                <img alt="company logo" className="lg:max-w-[200px] md:max-w-[180px] max-w-[150px] max-h-[200px] object-cover bg-[#2f3542] rounded-md opacity-25 hover:opacity-100 sponser_image  " src="https://e7.pngegg.com/pngimages/14/790/png-clipart-travel-company-logo.png" />
                <img alt="company logo" className="lg:max-w-[200px] md:max-w-[180px] max-w-[150px] max-h-[200px] object-cover bg-[#2f3542] rounded-md opacity-25 hover:opacity-100 sponser_image  " src="https://e7.pngegg.com/pngimages/14/790/png-clipart-travel-company-logo.png" />
            </Stack>
        </>
    );
}

export default SponserCompanies;
