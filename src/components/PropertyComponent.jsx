import React from 'react';
import { Stack } from '@mui/system';
import {Typography} from "../utils"

const PropertyComponent = () => {
    return (
        <>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" className="p-2 rounded-md bg-[#242935] md:mt-12 mt-1 mb-3 drop-shadow-lg" >
                <img alt="property imag" className="lg:max-w-[280px] md:max-w-[200px] max-w-[200px] xl:max-h-[250px] lg:max-h-[200px] md:max-h-[160px] max-h-[200px] object-cover min-w-full rounded-md" src="https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg" />
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" className="mt-3" >
                    <Typography children="$" className="text-[#d35400] lg:text-xl md:text-md " />
                    <Typography children="47,083" className="text-[#b2bec3] lg:text-xl md:text-md font-bold ml-1" />
                </Stack>
                <Typography children="Aliva Private Garden" className="text-[white] lg:text-lg md:text-[17px] text-[16px] font-bold ml-1" />
                <Typography children="Street 14, New Garden City , Milliana Peru Av. So #9876" className="text-[#8395a7] md:text-[12px] text-[10px] ml-1 mt-3 " />
            </Stack>
        </>
    );
}

export default PropertyComponent;
