"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperSlideComponent } from "../SwiperSlide";

// --- Tipos ---
type Foto = {
  id: string;
  titulo: string;
  fotos: { large: string } | undefined;
};

type ProdutosSliderProps = {
  fotos: Foto[];
  modo?: "padrao" | "orcamento"; 
};

type PlaygroundInfo = {
  titulo: string;
  ID: string;
};

const formatarUrl = (url: string | undefined) => {
  if (!url) return "";
  return url.replace(
    "http://localhost:1111",
    "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io"
  );
};

export function ProdutosSlider({ fotos, modo = "padrao" }: ProdutosSliderProps) {
  const [playgroundSelecionado, setPlaygroundSelecionado] = useState<PlaygroundInfo>();

  useEffect(() => {
    const savedInfo = sessionStorage.getItem("playgroundInfo");
    if (savedInfo) {
      setPlaygroundSelecionado(JSON.parse(savedInfo));
    }
  }, []);

  let itemsParaRenderizar = fotos;

  if (modo === "orcamento" && playgroundSelecionado?.ID) {
    const itemSelecionado = fotos.find((f) => f.id === playgroundSelecionado.ID);
    
    if (itemSelecionado) {
      itemsParaRenderizar = [itemSelecionado];
    }
  }

  return (
    <SwiperSlideComponent>
      {itemsParaRenderizar.map((f, index) => (
        <SwiperSlide key={`${f.id}-${index}`}>
          <div className="relative group rounded-[50px] overflow-hidden">
            <Image
              src={
                f.fotos
                  ? formatarUrl(f.fotos.large)
                  : ""
              }
              alt={f.titulo}
              width={800}
              height={600}
              className="rounded-[50px] object-cover"
            />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold text-lg">{f.titulo}</span>
              </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperSlideComponent>
  );
}