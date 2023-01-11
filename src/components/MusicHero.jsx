import React from 'react';
import {Box} from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MusicHero = () => {
    return (
        <>
            <Box className="main_class w-full cursor-pointer bg-cover bg-[url(http://farm5.staticflickr.com/4144/4978882770_72d5b56094_z.jpg)]  max-w-[400px] max-h-[400px] bg-[pink] h-auto md:-[92vh] flex flex-col items-center justify-center min-h-[300px] opacity-100 hover:opacity-70" >
                {/* <img className="w-full h-full opacity-100 hover:opacity-50 object-contain" alt="bg-imag" src="http://farm5.staticflickr.com/4144/4978882770_72d5b56094_z.jpg" /> */}
                <Box className="flex flex-col checkHover " >
                    <h4>hello</h4>
                    <h4>Hamza</h4>
                </Box>
                <PlayArrowIcon size="25px" className="playIcon bg-[white]" />
            </Box>
        </>
    );
}

export default MusicHero;
