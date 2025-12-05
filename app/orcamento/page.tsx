"use client";

import { Menu } from "../componentes/Menu";
import { BotaoWhatsAppp } from "../componentes/BotaoWhatsAppp";
import { Footer } from "../sections/Footer";
import { SlideDosProdutos } from "../componentes/SlideDosProdutos";
import { FormularioOrcamento } from "../componentes/FormularioOrcamento";


export default function Orcamento() {
  return (
    <div className="w-full h-auto">
      <Menu />

      <main className="w-full flex flex-col relative">
        <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(/img/product-home-banner.jpg)` }}>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="w-[90%] -mt-48 mb-48 mx-auto p-16 flex lg:flex-row sm:flex-col bg-[#FDFEFD] rounded-xl z-[1000]">
          <div className="lg:w-6/12 sm:w-full lg:p-8 sm:p-2">
            <SlideDosProdutos />
          </div>

          <div className="lg:w-6/12 sm:w-full lg:p-8 sm:p-2">
            <FormularioOrcamento />
          </div>
        </div>
        <BotaoWhatsAppp />

      </main>

      <Footer />
    </div>
  );
}
