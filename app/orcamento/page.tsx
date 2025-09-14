"use client";


import { Menu } from "../componentes/Menu";
import { BotaoWhatsAppp } from "../componentes/BotaoWhatsAppp";
import PlaygroundBanner from './img/product-home-banner.jpg'
import { Footer } from "../sections/Footer";
import { SlideDosProdutos } from "../componentes/SlideDosProdutos";
import { FormularioOrcamento } from "../componentes/FormularioOrcamento";


export default function Orcamento() {
  return (
    <div className="w-full h-auto">
      <Menu />

      <main className="w-full flex flex-col relative">
        <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${PlaygroundBanner.src})` }}>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="w-[90%] -mt-48 mb-48 mx-auto p-16 flex bg-[#FDFEFD] rounded-xl z-[1000]">
          <div className="w-6/12 p-8">
            <SlideDosProdutos />
          </div>

          <div className="w-6/12 p-8">
            <FormularioOrcamento />
          </div>
        </div>
        <BotaoWhatsAppp />

      </main>

      <Footer />
    </div>
  );
}
