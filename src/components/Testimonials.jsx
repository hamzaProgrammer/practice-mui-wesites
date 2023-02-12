import React from 'react';
import {Box } from "@mui/material"
import {Typography} from "../utils"
import Testimonial from "./UserTestimonial"
import SenderImage1 from "../assets/images/gym02.png"
import SenderImage2 from "../assets/images/gym03.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const Testimonials = () => {
    return (
        <>
            <Box className="flex flex-col justify-center items-center xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] xl:mt-12 lg:mt-6 mt-6 py-6" >
                <Typography children="Testimonials" className="text-xl xl:text-3xl lg:txt-2xl md:text-2xl text-[#3742fa] mb-10" />
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper max-w-[90%] p-4"
                >
                    <SwiperSlide >
                        <Testimonial image={SenderImage1} username="Jessica Fernendes" />
                    </SwiperSlide>
                    <SwiperSlide  image={SenderImage2} username="Jhonny Bairstrow" >
                        <Testimonial  image={SenderImage1} username="Charles" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Testimonial  image={SenderImage2} username="Feddy Merrison" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Testimonial image={SenderImage2} username="Jessica Fernendes" />
                    </SwiperSlide>
                    <SwiperSlide  image={SenderImage2} username="Jhonny Bairstrow" >
                        <Testimonial  image={SenderImage1} username="Charles" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Testimonial  image={SenderImage1} username="Feddy Merrison" />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
  );
}

export default Testimonials;
