import { Menu } from "@/app/componentes/Menu";
import { ProductCard } from "@/app/componentes/ProductCard";
import { ProductSlide } from "@/app/componentes/ProductSlide";
import { manifest } from "@/app/lib/manifest";
import { Footer } from "@/app/sections/Footer";
import { TProduto } from "@/app/types/TProduto";
import { StaticImageData } from "next/image";


export default async function Produto({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const playground: TProduto = await manifest.from("produtos").findOneById(id);
    const produtosData = await manifest.from("produtos").find();
    const produtos = (produtosData.data as TProduto[]);

    const produtosComFotos = produtos.map((produto: TProduto) => {
        return {
            ...produto,
            fotos: [produto.Foto1, produto.Foto2, produto.Foto3, produto.Foto4]
        }
    });
    return (
        <section className="w-full">
            <Menu />
            <div className="w-full mt-24 flex flex-col lg:flex-row">
                <div className="w-5/12 h-full p-12">
                    <ProductSlide
                        Foto1={playground.Foto1}
                        Foto2={playground.Foto2}
                        Foto3={playground.Foto3}
                        Foto4={playground.Foto4}
                        Titulo={playground.Titulo}

                    />
                </div>
                <div className="w-full lg:w-1/2 flex items-center">

                    <div className="w-4/5 mx-auto py-16 flex flex-col">
                        <h1 className="text-5xl font-bold">{playground.Titulo}</h1>
                        <p className="mt-8 leading-relaxed">
                            {playground.Descrição_Produto}
                        </p>
                        <button className="w-2/5 mt-8 py-4 rounded-lg bg-[#2B569C] text-white font-bold text-lg">
                            Fazer Orçamento
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full my-16">
                <ul className="w-full flex flex-wrap justify-center gap-16">
                    <h2 className="w-full text-2xl font-semibold">
                        Produtos Relacionados
                    </h2>
                    {produtosComFotos.reverse().map((produto) => (
                        <ProductCard
                            key={produto.id}
                            images={produto.fotos.filter((foto): foto is { large: string } => foto !== undefined)}
                            width={600}
                            height={400}
                            alt={produto.Titulo}
                            title={produto.Titulo}
                            subtitle={produto.Subtitulo}
                            description={produto.Descrição_Card}
                            link={`/produto/${produto.id}`}
                        />
                    ))}

                </ul>
            </div>

            <Footer />
        </section>
    )
}