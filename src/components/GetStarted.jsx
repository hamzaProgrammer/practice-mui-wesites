import React , {useContext} from 'react';
import {ThemeContext} from "../App"
import {Stack , Box} from "@mui/material"
import {Typography , Button} from "../utils"

const GetStarted = () => {
    const [ theme , setTheme ] = useContext(ThemeContext)
    return (
        <>
            <Box className="md:h-[450px] pt-8 pb-4 px-3" >
                <Stack direction="column" justifyContent="center" alignItems="center" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto w-full mt-10 md:py-[60px] py-4 rounded-lg getStarted " >
                    <Typography children="Get Started with Holux" className={`${theme ? "text-[white]" : "text-[#2f3640]"}  font-bold text-bold xl:text-4xl lg:text-3xl md:text-2xl pt-6 pb-2`} />
                    <Typography children="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. consectetur, adipisci velit." className="text-[#636e72] text-bold xl:text-[13px] lg:text-[13px] md:text-[12px] text-[11px] pt-2 pb-2 xl:max-w-[550px] lg:max-w-[500px] md:max-w-[450px] sm:max-w-[320px] px-3 mx-auto text-center " />
                    <Button children="Get Started" className={`text-[white] md:px-6 px-4 border border-white capitalize bg-[#3867d6] mt-5 hover:bg-[transparent] getStartedBtn`} />
                </Stack>
            </Box>
        </>
    );
}

export default GetStarted;
