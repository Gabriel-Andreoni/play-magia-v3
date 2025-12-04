import { manifest } from "@/app/lib/manifest";
import { TProduto } from "@/app/types/TProduto";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperSlideComponent } from "../SwiperSlide";

export function SlideDosProdutos() {
    const [produtos, setProdutos] = useState<TProduto[]>([]);


    useEffect(() => {
        async function getProdutos() {
            const playgrounds = await manifest.from("produtos").find();
            setProdutos(playgrounds.data as TProduto[]);
        }
        getProdutos();
    }, []);

    const fotosRaw = produtos.map((p) => ({
        titulo: p.Titulo,
        fotos: [p.Foto1, p.Foto2, p.Foto3, p.Foto4].filter((f) => f != null),
    }));

    const fotos = fotosRaw.map((f) => ({
        titulo: f.titulo,
        fotos: f.fotos[0],
    }));

    return (
        <SwiperSlideComponent>
            {fotos.reverse().map((f, index) => (
                <SwiperSlide key={index}>
                    <div className="relative group rounded-[50px] overflow-hidden">
                        <Image
                            src={f.fotos!.large.replace(
                                "http://localhost:1111",
                                "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io"
                            )}
                            alt={f.titulo}
                            width={500}
                            height={300}
                            className="rounded-[50px]"
                        />
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
