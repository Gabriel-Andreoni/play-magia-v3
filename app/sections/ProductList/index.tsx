120250003761884;

import { ProductCard } from "@/app/componentes/CardDoProduto";
import { manifest } from "@/app/lib/manifest";
import { TProduto } from "@/app/types/TProduto";

export async function ProductList() {
  const produtosHomePage = await manifest.from("produtos").find();

  const produtos = (produtosHomePage.data as TProduto[]).reverse().slice(0, 3);

  const produtosComFotos = produtos.map(({ Foto1, Foto2, Foto3, Foto4, ...rest }) => {
    return {
      ...rest,
      Fotos: [Foto1, Foto2, Foto3, Foto4].filter((foto) => foto != null)
    }
  });

  return (
    <section className="w-full min-h-auto px-[6em] bg-[#A05625]" id="produtos">
      <h1 className="py-2 flex flex-col text-center text-[6em] text-white text-balance">
        O Playground{" "}
        <span className="text-[#FAE8BF]">dos sonhos está aqui!</span>
      </h1>

      <ul className="w-full pb-[8em] flex justify-center flex-wrap gap-[2em] relative">
        {produtosComFotos.map((produto) => (
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
    </section>
  );
}
