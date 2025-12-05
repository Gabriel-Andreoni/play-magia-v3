"use client";

import { Menu } from "../componentes/Menu";
import { Footer } from "../sections/Footer";

import { ProdutosRelacionados } from "../componentes/ProdutosRelacionados";
import { BotaoWhatsAppp } from "../componentes/BotaoWhatsAppp";
import { SlideDosProdutos } from "../componentes/SlideDosProdutos";

export default function Playgrounds() {
    return (
        <>
            <Menu />

            <main className="w-full flex flex-col relative">
                {/* HEADER COM IMAGEM DE FUNDO */}
                <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(/images/product-home-banner.jpg)` }}>
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="w-[90%] -mt-48 mx-auto p-16 flex lg:flex-row sm:flex-col bg-[#FDFEFD] rounded-xl z-[1000]">
                    {/* Texto */}
                    <div className="lg:w-1/2 sm:w-full flex flex-col">
                        <div className="lg:w-[90%] sm:w-full p-4 rounded-[1.8em] bg-[#F5F4F2]">
                            <h1 className="text-2xl font-semibold">Mais do que Playgrounds, Experiências</h1>
                            <h3 className="mt-4 text-base font-light">
                                Conheça Nosso Portfólio de Playgrounds de Madeira: Diversão, Segurança e Personalização. <br />
                                Explore nossos modelos exclusivos ou crie junto com nossa equipe o playground dos seus sonhos.
                            </h3>
                        </div>

                        <div className="lg:w-[90%] sm:w-full mt-8 p-4 bg-[#F5F4F2] rounded-[1.8em] flex flex-col">
                            <p className="mt-4 leading-relaxed font-light">
                                Em nosso portfólio, você encontra uma seleção dos principais modelos de playgrounds de madeira, desenvolvidos para diferentes tipos de espaços e necessidades. Cada projeto é pensado para proporcionar diversão, estimular a criatividade e garantir a máxima segurança das crianças, utilizando madeira de qualidade, design inovador e acabamentos impecáveis. Apresentamos opções que vão desde estruturas clássicas até grandes projetos personalizados, para áreas residenciais, escolas, condomínios, hotéis, clubes e praças públicas.
                            </p>
                            <p className="mt-4 leading-relaxed font-light">
                                Se deseja algo único e totalmente adaptado ao seu espaço, nossa equipe de engenharia está pronta para desenvolver soluções de playgrounds de madeira sob medida, aliando segurança, estética, funcionalidade e durabilidade. Conte com nosso atendimento especializado para tirar dúvidas, adaptar projetos ou criar novos conceitos exclusivos para seu ambiente. Navegue pelo nosso portfólio, inspire-se nos modelos e entre em contato para transformar seu projeto em realidade. A diversão começa aqui — e é feita do seu jeito!
                            </p>
                        </div>
                    </div>

                    {/* Slide */}
                    <div className="lg:w-1/2 sm:w-full px-4 pb-4 flex justify-center -order-1">
                        <div className="w-full lg:p-8 sm:p-2">
                            <SlideDosProdutos />
                        </div>
                    </div>
                </div>
            </main>

            {/* PRODUTOS RELACIONADOS */}
            <div className="w-full my-24">
                <ul className="w-[90%] mx-auto flex flex-wrap gap-16">
                    <h2 className="w-full text-2xl font-semibold">Playgrounds que Fazem a Diferença</h2>

                    <ProdutosRelacionados quantProdutos={17} />
                </ul>
            </div>

            <BotaoWhatsAppp />

            <Footer />
        </>
    );
}
