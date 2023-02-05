import React from 'react';
import {Stack, Box} from "@mui/material"
import Header from "../common/Header"
import {Typography , InputField , Button } from "../utils"
import AddIcon from '@mui/icons-material/Add';
import { motion } from "framer-motion"


const HeroSecton = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 , type : "sping" , stiffness : 120 }}
            >
                <Stack direction="column" justifyContent="center" alignItems="center" className="bg-[#242935] " >
                    <Header />
                    <Stack direction={{ sm : "row" , md : "row" , lg: "row"}} justifyContent="space-between" className=" xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto py-4 w-full md:pt-10 mt-6" >
                        <Stack direction="column" justifyContent={{ xs : "center" , sm : "flex-start" , md : "flex-start" }} alignItems={{ xs : "center" , sm : "flex-start", md:"flex-start"}} className=" md:max-w-[50%] w-full lg:pl-4 md:pl-2 pl-0 " >
                            <Typography children="Discover" className="text-[white] xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-semibold  mb-2" />
                            <Typography children="Most Suitable" className="text-[white] xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-semibold mb-2" />
                            <Typography children="Property" className="text-[white] xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-semibold  mb-2" />

                            <Typography children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper quam a justo imperdiet, nec placerat lacus tristique" className="text-[white] md:text-[14px] text-[10px] font-medium my-4 lg:max-w-[90%] md:max-w-[9 0%] w-full md:px-0 px-4 "  />

                            <Stack direction="row" spacing={{xs: 1}} justifyContent="center" alignItems="center" className="bg-[white] rounded-md p-2 md:mx-0 mx-2 " >
                                <img className="" alt="location icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXpJREFUSEvFle0xREEQRc9GQAaIABEgAyJABIgEESACMkAEZIAMiIA6qkfNzs7H2x9b5s/Uzuu+t/v2x85Y8ZmtGJ8pBJvAGbAP7ERAr8ATcA2894IcEVwFeA9Dm4uWQY/AKLfD8Q4QyDePmZwDx1lGuzWSFkGK/CukScAlhkRKtRZySTp3agRq/hZWRpWDf8d77ifJS7xvlTWpEaToLWAZUY1A7NuQa8GnRpC0L6MXqEWQstB3rhY1ghIk/R41SpX8Xwjsir1IteyelkQO4SPwHF33l20tg1Qwh8eC56dFYDNcAs7LSe5QIzgE7qPdbLspBK6LDeAIeBgR+D05nEYL9laFEd8AH4AzNBw0DVIWn4BZeNfOegyl90L0OvR2USq290GDIM3MQnGTfY/AqJTKPWPhlSs/qRncV0pTzXK0rvNllpPk4LZoaxlO+sMpSczMGo027W+2owySJDmJb5PAlyHQVhKl8diaTVmmzEGv75f6NlWipUBz4x/2dVQZ/ApGpwAAAABJRU5ErkJggg=="/>
                                <InputField placeholder="Search by location..." variant="filled" className="bg-[white] lg:w-[75%] "  />
                                <motion.div
                                    whileHover = {{
                                        scale : 1.1 ,
                                        boxShadow : "0px 0px 8px #4834d4",
                                        borderRadius : "10%",
                                    }}
                                >
                                    <Button children="Search" className="bg-[#4834d4] capitalize lg:px-4 md:px-2 px-4 text-[white] font-semibold hover:bg-[white] hover:text-[#4834d4] md:text-[14px] text-[12px] " />
                                </motion.div>
                            </Stack>

                            <Stack direction="row" spacing={{xs: 6 , md: 8}} justifyContent="center" alignItems="center" className="px-3 mt-5 md:mx-0 mx-6" >
                                <Stack direction="column" spacing={{xs: 1}} justifyContent="center" alignItems="center"  >
                                    <Stack direction="row" spacing={{xs: 1}} justifyContent="center" alignItems="center" >
                                        <Typography children="2K" className="text-[white] xl:text-3xl lg:text-2xl font-bold "  />
                                        <AddIcon className="text-2xl text-[#fdcb6e]" />
                                    </Stack>
                                    <Typography children="Premuim" className="text-[white] text-[14px] font-normal "  />
                                </Stack>
                                <Stack direction="column" spacing={{xs: 1}} justifyContent="center" alignItems="center"  >
                                    <Stack direction="row" spacing={{xs: 1}} justifyContent="center" alignItems="center" >
                                        <Typography children="6K" className="text-[white] xl:text-3xl lg:text-2xl font-bold "  />
                                        <AddIcon className="text-2xl text-[#fdcb6e]" />
                                    </Stack>
                                    <Typography children="Happy" className="text-[white] text-[14px] font-normal "  />
                                </Stack>
                                <Stack direction="column" spacing={{xs: 1}} justifyContent="center" alignItems="center"  >
                                    <Stack direction="row" spacing={{xs: 1}} justifyContent="center" alignItems="center" >
                                        <Typography children="28K" className="text-[white] xl:text-3xl lg:text-2xl font-bold "  />
                                        <AddIcon className="text-2xl text-[#fdcb6e]" />
                                    </Stack>
                                    <Typography children="Awards" className="text-[white] text-[14px] font-normal "  />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Box className="rounded-t-full border-t-4 bg-[#a4b0be] lg:w-[400px] md:w-[300px]  w-[300px] md:min-h-full  mx-auto min-h-[400px] md:mt-0 mt-6 md:-mb-7 -mb-7 " >
                            <img alt="hero_image" className="rounded-t-full border-t-2 md:min-h-full min-h-[400px] object-cover lg:w-[400px] md:w-[300px] w-[300px] pt-4 px-3 " src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"  />
                        </Box>
                    </Stack>
                </Stack>
            </motion.div>
        </>
    );
}

export default HeroSecton;
