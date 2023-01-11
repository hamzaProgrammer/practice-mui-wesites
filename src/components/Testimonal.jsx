import React from 'react';
import {Box} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from "../utils/Typography"
import {Swiper , SwiperSlide   } from "swiper/react";
import {Pagination , Navigation } from "swiper"

// importing styles for swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Testimonial = () => {
    const largeMedia = useMediaQuery('(min-width:1025px)')
    const mediumMedia = useMediaQuery('(min-width:769px)')
    const testimonialStyle = {textAlign : "center" , fontSize : "25px" , fontWeight : 600 , color : '#2d3436'}
    const testimonialDesc = {color : "#636e72" , fontWeight : 400 , fontSize : "14px" , marginTop :"10px" , paddingBottom : "10px"}
    return (
        <>
            <Box className="flex flex-col max-w-[1240px] mx-auto  bg-[#f9ca24] mt-4 pb-3">
                <Typography children="REVIEWS" sx={testimonialStyle} />
                <Swiper
                    modules={[Pagination , Navigation]}
                    slidesPerView={largeMedia === true ? 3 : (mediumMedia === true ? 2 : 1)}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={{clickable: true}}
                    className="max-w-[1240px] mt-4"
                    //pagination={{ clickable: true }}
                >
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% text-[black] shadow-lg shadow-cyan-500/50 bg-[white] flex flex-col justify-center align-center text-center p-2 rounded-md" >
                        <img className="max-w-[50px] rounded-full max-h-[40px] mx-auto " alt="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
                        <Typography children="Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta." sx={testimonialDesc} />
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% text-[black] shadow-lg shadow-cyan-500/50 bg-[white] flex flex-col justify-center align-center text-center p-2 rounded-md" >
                        <img className="max-w-[50px] rounded-full max-h-[40px] mx-auto " alt="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
                        <Typography children="Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta." sx={testimonialDesc} />
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% text-[black] shadow-lg shadow-cyan-500/50 bg-[white] flex flex-col justify-center align-center text-center p-2 rounded-md" >
                        <img className="max-w-[50px] rounded-full max-h-[40px] mx-auto " alt="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
                        <Typography children="Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta." sx={testimonialDesc} />
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% text-[black] shadow-lg shadow-cyan-500/50 bg-[white] flex flex-col justify-center align-center text-center p-2 rounded-md" >
                        <img className="max-w-[50px] rounded-full max-h-[40px] mx-auto " alt="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
                        <Typography children="Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta." sx={testimonialDesc} />
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% text-[black] shadow-lg shadow-cyan-500/50 bg-[white] flex flex-col justify-center align-center text-center p-2 rounded-md" >
                        <img className="max-w-[50px] rounded-full max-h-[40px] mx-auto " alt="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
                        <Typography children="Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta." sx={testimonialDesc} />
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[33%] md:max-w-[50%] w-100% text-[black] shadow-lg shadow-cyan-500/50 bg-[white] flex flex-col justify-center align-center text-center p-2 rounded-md" >
                        <img className="max-w-[50px] rounded-full max-h-[40px] mx-auto " alt="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
                        <Typography children="Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta." sx={testimonialDesc} />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
}

export default Testimonial;
