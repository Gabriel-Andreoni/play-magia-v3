import { Metadata, ResolvingMetadata } from "next";
import { Menu } from "@/app/componentes/Menu";
import { ProductCard } from "@/app/componentes/CardDoProduto";
import { ProductSlide } from "@/app/componentes/SlideDoProduto";
import { manifest } from "@/app/lib/manifest";
import { Footer } from "@/app/sections/Footer";
import { TProduto } from "@/app/types/TProduto";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = params;
  const playground: TProduto = await manifest.from("produtos").findOneById(id);

  const previousImages = (await parent).openGraph?.images || [];

  const imageUrl = playground.Foto1?.large
    ? playground.Foto1.large.replace("http://localhost:1111", "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io")
    : "/images/play-magia-logo.png";

  return {
    title: `${playground.Titulo} | Play Magia`,
    description: playground.Descrição_Produto,
    openGraph: {
      title: `${playground.Titulo} | Play Magia`,
      description: playground.Descrição_Produto,
      images: [imageUrl, ...previousImages],
    },
  };
}

export default async function Produto({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const playground: TProduto = await manifest.from("produtos").findOneById(id);
    const produtosData = await manifest.from("produtos").find();
    const produtos = (produtosData?.data as TProduto[] || []);

    const produtosComFotos = produtos.map(({ Foto1, Foto2, Foto3, Foto4, ...rest }) => {
        return {
            ...rest,
            Fotos: [Foto1, Foto2, Foto3, Foto4].filter((foto) => foto != null)
        }
    });

    return (
        <section className="w-full">
            <Menu />
            <div className="w-full mt-24 flex flex-col lg:flex-row">
                <div className="lg:w-5/12 sm:w-full h-full lg:p-12 sm:p-6">
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
                        <h1 className="lg:text-5xl sm:text-4xl font-bold">{playground.Titulo}</h1>
                        <p className="mt-8 leading-relaxed">
                            {playground.Descrição_Produto}
                        </p>
                        <button className="lg:w-2/5 sm:w-full mt-8 py-4 rounded-lg bg-[#444A19] text-white font-bold text-lg cursor-pointer">
                            Fazer Orçamento
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full my-16">
                <ul className="w-[90%] mx-auto flex flex-wrap justify-center gap-16">
                    <h2 className="w-full text-2xl font-semibold">
                        Produtos Relacionados
                    </h2>
                    {produtosComFotos.reverse().map((produto) => (
                        <ProductCard
                            key={produto.id}
                            images={produto.Fotos}
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