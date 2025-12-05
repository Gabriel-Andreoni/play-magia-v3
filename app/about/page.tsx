"use client"

import { SwiperSlide } from "swiper/react";
import { Menu } from "../componentes/Menu";
import { SwiperSlideComponent } from "../componentes/SwiperSlide";
import { Footer } from "../sections/Footer";
import Image from "next/image";
import { BotaoWhatsAppp } from "../componentes/BotaoWhatsAppp";

export default function AboutPage() {
  return (
    <>
      <Menu />

      <main className="flex flex-col w-full relative">
        <div
          className="w-full h-[60vh] relative bg-center bg-cover"
          style={{
            backgroundImage: `url(/img/product-home-banner.jpg)`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        </div>

        <div className="w-[90%] mx-auto -mt-48 mb-48 p-16 bg-[#FDFEFD] rounded-lg z-10 flex flex-col lg:flex-row gap-8">
          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-[#F5F4F2] rounded-3xl p-4 w-[90%]">
              <h1 className="text-2xl font-bold">Conheça a Play Magia</h1>
              <h3 className="mt-4 text-base font-light">
                Está buscando o playground de madeira perfeito para transformar sua área de lazer em um ambiente seguro, criativo e encantador para as crianças?
              </h3>
            </div>

            <div className="bg-[#F5F4F2] rounded-3xl p-4 w-[90%] flex flex-col gap-4 font-light">
              <p>
                Nós desenvolvemos playgrounds de madeira sob medida, com design inovador, excelente acabamento e materiais de alta durabilidade
              </p>
              <p>
                Nossos projetos de playgrounds são totalmente personalizados, elaborados por equipe de engenharia especializada, para se adaptarem ao seu espaço
              </p>
              <p>
                Além disso, oferecemos consultoria especializada desde a concepção até a instalação do playground, prezando pelo melhor custo-benefício
              </p>
              <p className="font-bold my-2">Entre em contato e solicite um orçamento personalizado!</p>
              <p>
                Transforme seu espaço em um verdadeiro universo de diversão e magia com playgrounds de madeira!
              </p>
            </div>
          </div>

          {/* Slide */}
          <div className="w-full lg:w-1/2 flex justify-center p-4">
            <div className="w-[90%] h-[60%]">
              <SwiperSlideComponent>
                <SwiperSlide className="w-[200px] h-[400px] p-16 flex-col rounded-3xl bg-[#FAE8BF]">
                  <div className="flex gap-4">
                    <Image src="/img/avatar.png" alt="Avatar" width={80} height={80} />
                    <span>
                      <h3 className="font-semibold">Ana Júlia</h3>
                      <h4 className="text-sm font-light">Diretora da Escola Bem-te-vi</h4>
                    </span>
                  </div>
                  <div className="h-[80%] p-4">
                    <p className="mt-4 leading-[1.3em] font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero illo ducimus iure eum et provident officiis tenetur
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-[200px] h-[400px] p-16 flex-col rounded-3xl bg-[#585C2B]">
                  <div className="flex gap-4">
                    <Image src="/img/avatar.png" alt="Avatar" width={80} height={80} />
                    <span>
                      <h3 className="font-semibold text-[#FAE8BF]">Ana Júlia</h3>
                      <h4 className="text-sm font-light text-[#FAE8BF]">Diretora da Escola Bem-te-vi</h4>
                    </span>
                  </div>
                  <div className="h-[80%] p-4">
                    <p className="mt-4 leading-[1.3em] font-light text-[#FAE8BF]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero illo ducimus iure eum et provident officiis tenetur
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-[200px] h-[400px] p-16 flex-col rounded-3xl bg-[#BC7823]">
                  <div className="flex gap-4">
                    <Image src="/img/avatar.png" alt="Avatar" width={80} height={80} />
                    <span>
                      <h3 className="font-semibold">Ana Júlia</h3>
                      <h4 className="text-sm font-light">Diretora da Escola Bem-te-vi</h4>
                    </span>
                  </div>
                  <div className="h-[80%] p-4">
                    <p className="mt-4 leading-[1.3em] font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero illo ducimus iure eum et provident officiis tenetur
                    </p>
                  </div>
                </SwiperSlide>
              </SwiperSlideComponent>
            </div>
          </div>
        </div>
      </main>
      <BotaoWhatsAppp />
      <Footer />
    </>
  );
}
