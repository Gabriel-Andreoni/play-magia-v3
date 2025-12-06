import { ProductCard } from "../CardDoProduto";
import { getPlaygrounds } from "@/app/lib/playgrounds/getPlaygrounds";

export async function ProdutosRelacionados({quantProdutos}: {quantProdutos: number}) {
  const produtos = await getPlaygrounds();
  const quantidadeProdutos = quantProdutos;
  
  const produtosComFotos = produtos.data.map(({ Foto1, Foto2, Foto3, Foto4, ...rest }) => {
    return {
      ...rest,
      Fotos: [Foto1, Foto2, Foto3, Foto4].filter((foto) => foto != null)
    }
  })

    return (
        <ul className="w-full pb-[6em] flex justify-center flex-wrap gap-[2em] relative">
            {produtosComFotos.reverse().slice(0, quantidadeProdutos).map((produto) => {
                return (
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
                )
            })}
        </ul>
    )
}