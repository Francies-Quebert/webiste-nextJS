import React, { useState, useEffect, ReactNode, useRef } from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export interface Item {
    id: number;
    element: string | JSX.Element | Element;
    width?: string | number;
}
const Carousel: React.FC<{ items: Item[] }> = ({ items = [] }) => {
    SwiperCore.use([Autoplay]);


    return (
        <Swiper slidesPerView={'auto'} spaceBetween={10} className='' autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
        }}
        >
            {items.map((item) => (
                <SwiperSlide  key={item.id} className='justify-center items-center h-[100px]'>
                    <div className="flex justify-center items-center">{item.element as ReactNode}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


export default Carousel;

