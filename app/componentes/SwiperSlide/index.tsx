'use client';

import { Swiper } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


export function SwiperSlideComponent({children, className}: {children: React.ReactNode, className?:string}) {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={`${className}`}
        >
            {children}
        </Swiper>
    );
}
