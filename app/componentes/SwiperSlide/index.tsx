'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


export function SwiperSlideComponent({children}: {children: React.ReactNode}) {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={`w-full h-full`}
        >
            {children}
        </Swiper>
    );
}
