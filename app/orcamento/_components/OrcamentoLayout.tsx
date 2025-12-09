"use client";

import {useState, useEffect} from "react";
import { BotaoWhatsAppp } from "@/app/componentes/BotaoWhatsAppp";
import { FormularioOrcamento } from "@/app/componentes/FormularioOrcamento";
import { Menu } from "@/app/componentes/Menu";
import { Footer } from "@/app/sections/Footer";

type OrcamentoLayoutProps = {
  children: React.ReactNode;
};

type PlaygroundInfo = {
  titulo: string;
  ID: string;
}

export default function OrcamentoLayout({ children }: OrcamentoLayoutProps) {
  const [playgroundSelecionado, setPlaygroundSelecionado] = useState<PlaygroundInfo>();
  
  useEffect(() => {
    const playgroundInfo: PlaygroundInfo = JSON.parse(localStorage.getItem("playgroundInfo") || "{}");
    setPlaygroundSelecionado(playgroundInfo);
  }, []);
  
  console.log(playgroundSelecionado)
  return (
    <div className="w-full h-auto">
      <Menu />

      <main className="w-full flex flex-col relative">
        <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(/images/product-home-banner.jpg)` }}>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="w-[90%] -mt-48 mb-48 mx-auto p-16 flex lg:flex-row sm:flex-col bg-[#FDFEFD] rounded-xl z-[1000]">
          <div className="lg:w-6/12 sm:w-full lg:p-8 sm:p-2">
            {children}
          </div>

          <div className="lg:w-6/12 sm:w-full lg:p-8 sm:p-2">
            {playgroundSelecionado?.titulo && (
              <FormularioOrcamento
                titulo={playgroundSelecionado.titulo}
                ID={playgroundSelecionado.ID}
              />
            )}
          </div>
        </div>
        <BotaoWhatsAppp />

      </main>

      <Footer />
    </div>
  );
}
