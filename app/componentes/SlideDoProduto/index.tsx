"use client";

import { SwiperSlide } from "swiper/react";
import { SwiperSlideComponent } from "../SwiperSlide";
import Image from "next/image";
import { TProduto } from "@/app/types/TProduto";

export function ProductSlide({ Titulo, Foto1, Foto2, Foto3, Foto4 }: Pick<TProduto, 'Foto1' | 'Foto2' | 'Foto3' | 'Foto4' | 'Titulo'>) {
    return (
        <SwiperSlideComponent>
            <SwiperSlide className="w-[600px] h-[400px] rounded-[50px]">
                <Image
                    src={Foto1.large.replace("http://localhost:1111", "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io")}
                    alt={Titulo}
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-inherit"
                />
            </SwiperSlide>

            {Foto2?.large && (
                <SwiperSlide className="w-[600px] h-[400px] rounded-[50px]">
                    <Image
                        src={Foto2.large.replace("http://localhost:1111", "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io")}
                        alt={Titulo}
                        width={600}
                        height={400}
                        className="w-full object-cover rounded-inherit"
                    />
                </SwiperSlide>
            )}

            {Foto3?.large && (
                <SwiperSlide className="w-[600px] h-[400px] rounded-[50px]">
                    <Image
                        src={Foto3.large.replace("http://localhost:1111", "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io")}
                        alt={Titulo}
                        width={600}
                        height={400}
                        className="w-full object-cover rounded-inherit"
                    />
                </SwiperSlide>
            )}

            {Foto4?.large && (
                <SwiperSlide className="w-[600px] h-[400px] rounded-[50px]">
                    <Image
                        src={Foto4.large.replace("http://localhost:1111", "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io")}
                        alt={Titulo}
                        width={600}
                        height={400}
                        className="w-full object-cover rounded-inherit"
                    />
                </SwiperSlide>
            )}

        </SwiperSlideComponent>
    )
}