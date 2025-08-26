import { Menu } from "../componentes/Menu";
import { Footer } from "../sections/Footer";
import { ProductCard } from "../componentes/ProductCard";
import Image from "next/image";

import SlideImage1 from './images/slide-image-1.jpg';
import PlaygroundBanner from './images/product-home-banner.jpg';
import { manifest } from "../lib/manifest";

export default async function Playgrounds() {
    const produtosRelacionados = await manifest.from("produtos_relacionados").find()

    console.log(produtosRelacionados);
    return (
        <>
            <Menu />

            <main className="w-full flex flex-col relative">
                {/* HEADER COM IMAGEM DE FUNDO */}
                <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${PlaygroundBanner.src})`}}>
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="w-[90%] -mt-48 mx-auto p-16 flex bg-[#FDFEFD] rounded-xl z-[1000]">
                    {/* Texto */}
                    <div className="w-1/2 flex flex-col">
                        <div className="w-[90%] p-4 rounded-[1.8em] bg-[#F5F4F2]">
                            <h1 className="text-2xl font-semibold">Playgrounds</h1>
                            <h3 className="mt-4 text-base">
                                Conheça Nosso Portfólio de Playgrounds de Madeira: Diversão, Segurança e Personalização. <br />
                                Explore nossos modelos exclusivos ou crie junto com nossa equipe o playground dos seus sonhos.
                            </h3>
                        </div>

                        <div className="w-[90%] mt-8 p-4 bg-[#F5F4F2] rounded-[1.8em] flex flex-col">
                            <p className="mt-4 leading-relaxed">
                                Em nosso portfólio, você encontra uma seleção dos principais modelos de playgrounds de madeira, desenvolvidos para diferentes tipos de espaços e necessidades. Cada projeto é pensado para proporcionar diversão, estimular a criatividade e garantir a máxima segurança das crianças, utilizando madeira de qualidade, design inovador e acabamentos impecáveis. Apresentamos opções que vão desde estruturas clássicas até grandes projetos personalizados, para áreas residenciais, escolas, condomínios, hotéis, clubes e praças públicas.
                            </p>
                            <p className="mt-4 leading-relaxed">
                                Se deseja algo único e totalmente adaptado ao seu espaço, nossa equipe de engenharia está pronta para desenvolver soluções de playgrounds de madeira sob medida, aliando segurança, estética, funcionalidade e durabilidade. Conte com nosso atendimento especializado para tirar dúvidas, adaptar projetos ou criar novos conceitos exclusivos para seu ambiente. Navegue pelo nosso portfólio, inspire-se nos modelos e entre em contato para transformar seu projeto em realidade. A diversão começa aqui — e é feita do seu jeito!
                            </p>
                        </div>
                    </div>

                    {/* Slide */}
                    <div className="w-1/2 px-4 pb-4 flex justify-center">
                        <div className="w-[90%] h-auto p-16 bg-[#a52a2a] flex justify-center items-center rounded-[1.8em]">
                            <Image src={SlideImage1} alt="Slide Image 1" width={600} height={400} className="rounded-[1.8em]" />
                        </div>
                    </div>
                </div>
            </main>

            {/* PRODUTOS RELACIONADOS */}
            <div className="w-full my-24">
                <ul className="w-[90%] mx-auto flex flex-wrap gap-16">
                    <h2 className="w-full text-2xl font-semibold">Playgrounds Ideais para o Seu Espaço</h2>

                    {produtosRelacionados.data.map((pR:any) => {
                        return (
                            <ProductCard
                                key={pR.id}
                                alt={pR.titulo}
                                image={pR.foto_1.large}
                                title={pR.titulo}
                                description={pR.descricao}
                                width={500}
                                height={500}
                                link={`/product/${pR.id}`}
                            />
                        )
                    })}
                </ul>
            </div>

            <Footer />
        </>
    );
}
