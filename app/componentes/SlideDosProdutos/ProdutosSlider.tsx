'use client';

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperSlideComponent } from "../SwiperSlide";

type Foto = {
    titulo: string;
    fotos: { large: string } | undefined;
};

type ProdutosSliderProps = {
    fotos: Foto[];
};

export function ProdutosSlider({ fotos }: ProdutosSliderProps) {
    return (
        <SwiperSlideComponent>
            {fotos.map((f, index) => (
                <SwiperSlide key={index}>
                    <div className="relative group rounded-[50px] overflow-hidden">
                        {f.fotos && (
                            <Image
                                src={f.fotos.large.replace(
                                    "http://localhost:1111",
                                    "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io"
                                )}
                                alt={f.titulo}
                                width={500}
                                height={300}
                                className="rounded-[50px]"
                            />
                        )}
                        <div className="absolute h-[334px] inset-0 flex items-center justify-center rounded-[50px] bg-black/60 opacity-0 group-hover:opacity-100 transition">
                            <span className="text-white font-bold text-lg">
                                Playground {f.titulo}
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </SwiperSlideComponent>
    );
}
