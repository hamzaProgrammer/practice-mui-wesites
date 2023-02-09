import React from 'react';
import {Stack , Paper} from '@mui/material';
import { Typography } from '../utils';
import Image1 from "../assets/images/coffe7.png"
// import Image2 from "../assets/images/coffe5.png"
// import Image3 from "../assets/images/coffe6.png"

const CoffeType = () => {
    return (
        <>
            {/* <Paper elevation={2}  > */}
                <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[#834333] rounded-lg pb-2 lg:mr-0 md:mr-2 mr-0 md:max-w-[170px] w-[220px] md:mx-auto md:mb-0 mb-3 " >
                    <img alt="coffee type imag" className="lg:max-w-full md:max-h-[200px] h-[220px] md:max-w-[100px] w-[220px] object-fit bg-[#834333]" src={Image1} />
                    <Typography children="Classic Coffee" className="text-[white] mt-3 text-medium font-[Pacifico] xl:text-xl lg:text-lg md:text-[15px] text-lg " />
                    <Typography children="$17.30" className="text-[white] text-bold italic xl:text-xl lg:text-xl md:text-[15px] text-lg " />
                </Stack>
            {/* </Paper> */}
        </>
    );
}

export default CoffeType;
