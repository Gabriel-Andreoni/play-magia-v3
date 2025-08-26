import { ProductCard } from "@/app/componentes/ProductCard";
import { manifest } from "@/app/lib/manifest";

export async function ProductList() {
  const produtosHomePage = await manifest.from("produtos").find();
  const produtos = produtosHomePage.data.reverse().slice(0, 3);
  const produtosComFotos = produtos.map((produto:any) => {
    const fotos = [produto.Foto1, produto.Foto2, produto.Foto3, produto.Foto4].filter(foto => foto && foto.large);

    return {
      ...produto,
      fotos,
    }
  });

  return (
    <section className="w-full min-h-auto px-[6em] bg-[#A05625]" id="produtos">
      <h1 className="py-2 flex flex-col text-center text-[6em] text-white text-balance">
        O Playground <span className="text-[#FAE8BF]">dos sonhos está aqui!</span>
      </h1>

      <ul className="w-full pb-[8em] flex justify-center flex-wrap gap-[2em] relative">
        {produtosComFotos.map((produto: any, index: number) => {
            return (
                <ProductCard
                    key={produto.id}
                    images={produto.fotos}
                    width={600}
                    height={400}
                    alt={produto.Titulo}
                    title={produto.Titulo}
                    subtitle={produto.Subtitulo}
                    description={produto.Descrição_Card}
                    link={`/produto/${produto.id}`}
                />
            )
        })}
      </ul>
    </section>
  );
}