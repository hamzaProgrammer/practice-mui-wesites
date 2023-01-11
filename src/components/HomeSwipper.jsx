import React from 'react';
import {Swiper , SwiperSlide   } from "swiper/react";
import {Pagination , Navigation } from "swiper";
import {Box} from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from "../utils/Typography"

// importing styles for swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const HomeSwiper = () => {
    const largeMedia = useMediaQuery('(min-width:1025px)')
    const medimMedia = useMediaQuery('(min-width:769px)')
    return (
        <>
            <Box className="lg:my-12 my-2 py-3 md:px-16 bg-[#f9ca24]" >
                <Swiper
                    modules={[Pagination , Navigation]}
                    slidesPerView={largeMedia === true ? 3 : (medimMedia === true ? 2 : 1)}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={{clickable: true}}
                    //pagination={{ clickable: true }}
                >
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% " >
                        <Box className="text-[black] bg-[white] flex justify-between p-2 rounded-md" >
                            <Box className="flex flex-col justify-start" >
                                <Typography children="SKIN" sx={{fontWeight :600}} />
                                <Typography children="Supepr Skin Care" sx={{fontSize : "12px"}}  />
                                <Typography children="$76" sx={{fontWeight :600 , fontSize : "22px" , marginTop : "15px"}} />
                            </Box>
                            <Box>
                                <img className="min-w-100% rounded-md max-h-[120px]" alt="cover" src="https://images.unsplash.com/photo-1666214282158-f9a0abed8472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className="text-[black] bg-[white] flex justify-between p-2 rounded-md" >
                            <Box className="flex flex-col justify-start" >
                                <Typography children="SKIN" sx={{fontWeight :600}} />
                                <Typography children="Supepr Skin Care" sx={{fontSize : "12px"}}  />
                                <Typography children="$15" sx={{fontWeight :600 , fontSize : "22px" , marginTop : "15px"}} />
                            </Box>
                            <Box>
                                <img className="min-w-100% rounded-md max-h-[120px]" alt="cover" src="https://images.unsplash.com/photo-1670611554834-d7e6e48b7bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className="text-[black] bg-[white] flex justify-between p-2 rounded-md" >
                            <Box className="flex flex-col justify-start" >
                                <Typography children="SKIN" sx={{fontWeight :600}} />
                                <Typography children="Supepr Skin Care" sx={{fontSize : "12px"}}  />
                                <Typography children="$15" sx={{fontWeight :600 , fontSize : "22px" , marginTop : "15px"}} />
                            </Box>
                            <Box>
                                <img className="min-w-100% rounded-md max-h-[120px]" alt="cover" src="https://images.unsplash.com/photo-1670672942264-e3ab41122241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className="text-[black] bg-[white] flex justify-between p-2 rounded-md" >
                            <Box className="flex flex-col justify-start" >
                                <Typography children="SKIN" sx={{fontWeight :600}} />
                                <Typography children="Supepr Skin Care" sx={{fontSize : "12px"}}  />
                                <Typography children="$15" sx={{fontWeight :600 , fontSize : "22px" , marginTop : "15px"}} />
                            </Box>
                            <Box>
                                <img className="min-w-100% rounded-md max-h-[120px]" alt="cover" src="https://images.unsplash.com/photo-1670685067634-33e331493206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className="text-[black] bg-[white] flex justify-between p-2 rounded-md" >
                            <Box className="flex flex-col justify-start" >
                                <Typography children="SKIN" sx={{fontWeight :600}} />
                                <Typography children="Supepr Skin Care" sx={{fontSize : "12px"}}  />
                                <Typography children="$15" sx={{fontWeight :600 , fontSize : "22px" , marginTop : "15px"}} />
                            </Box>
                            <Box>
                                <img className="min-w-100% rounded-md max-h-[120px]" alt="cover" src="https://images.unsplash.com/photo-1670680342823-4fe90ffb0d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
}

export default HomeSwiper;
