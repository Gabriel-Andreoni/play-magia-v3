"use client";

import { SwiperSlide } from "swiper/react";
import { Menu } from "../componentes/Menu";
import { SwiperSlideComponent } from "../componentes/SwiperSlide";
import { manifest } from "../lib/manifest";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TProduto } from "../types/TProduto";
import PlusIcon from './img/plus.png';
import { WhatsAppButton } from "../componentes/WhatsAppButton";


export default function Orcamento() {
  const [produtos, setProdutos] = useState<TProduto[]>([]);
  const [hasMessage, setHasMessage] = useState<boolean>(false);

  useEffect(() => {
    async function getProdutos() {
      const playgrounds = await manifest.from("produtos").find();
      setProdutos(playgrounds.data as TProduto[]);
    }


    getProdutos()
  }, [])

  const fotosRaw = produtos.map((p: Pick<TProduto, 'Titulo' | 'Foto1' | 'Foto2' | 'Foto3' | 'Foto4'>) => {
    return [
      {
        titulo: p.Titulo,
        fotos: [p.Foto1, p.Foto2, p.Foto3, p.Foto4].filter((f: any) => f != null)
      }
    ]
  }).flat();

  const fotos = fotosRaw.map((f) => {
    return {
      titulo: f.titulo,
      fotos: f.fotos[0]
    }
  });

  return (
    <div className="w-full h-auto">
      <Menu />

      <div className="w-full h-auto flex flex-wrap p-8">
        <h1 className="w-full font-bold">Realize o Orçamento do Playground dos Sonhos!</h1>
        <div className="w-6/12 p-8 flex justify-center items-center">
          <SwiperSlideComponent>
            {fotos.reverse().map((f, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="relative group rounded-[50px] overflow-hidden"
                    data-title={`Playground ${f.titulo}`}
                  >
                    <Image
                      src={f.fotos!.large}
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
              )
            })}
          </SwiperSlideComponent>

        </div>
        <div className="w-6/12 p-8">
          <h2 className="font-bold">Seus Dados</h2>
          <form className="flex flex-col gap-4 p-4">
            <div className="flex flex-col justify-start">
              <label className="font-light" htmlFor="nome">Nome Completo</label>
              <input className="p-2 border rounded-lg outline-none" type="text" name="nome" id="nome" />
            </div>
            <div className="flex gap-2">
              <div className="w-1/2 flex flex-col justify-start">
                <label className="font-light" htmlFor="email">E-mail</label>
                <input className="p-2 border rounded-lg outline-none" type="text" name="email" id="email" />
              </div>
              <div className="w-1/2 flex flex-col justify-start">
                <label className="font-light" htmlFor="telefone">Telefone</label>
                <input className="p-2 border rounded-lg outline-none" type="text" name="telefone" id="telefone" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2 flex flex-col justify-start">
                <label className="font-light" htmlFor="cidade">Cidade</label>
                <input className="p-2 border rounded-lg outline-none" type="text" name="cidade" id="cidade" />
              </div>
              <div className="w-1/2 flex flex-col justify-start">
                <label className="font-light" htmlFor="estado">UF</label>
                <input className="p-2 border rounded-lg outline-none" type="text" name="estado" id="estado" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image className="cursor-pointer" onClick={() => setHasMessage((prevState) => !prevState)} src={PlusIcon.src} width={24} height={24} alt="Adicionar Observações" />
              <span className="font-bold text-sm">Adicionar Observações</span>
            </div>

            {hasMessage && (
              <div className="flex flex-col justify-start">
                <label className="font-light" htmlFor="observacao">Observações</label>
                <textarea className="p-2 border rounded-lg outline-none resize-none" name="observacao" id="observacao"></textarea>
              </div>
            )}
            <button className="p-4 border rounded-lg bg-[#4d5020] text-white font-light cursor-pointer">Enviar</button>
          </form>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
