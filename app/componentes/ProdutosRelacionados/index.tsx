"use client";

import { useEffect, useState } from "react";

import { manifest } from "@/app/lib/manifest";
import { ProductCard } from "../CardDoProduto";
import { TProduto } from "@/app/types/TProduto";

type ProdutosRelacionados = {
    data: TProduto[]
}

export function ProdutosRelacionados({quantProdutos}: {quantProdutos: number}) {
    const [produtos, setProdutos] = useState<TProduto[]>([])
    const quantidadeProdutos = quantProdutos;

    useEffect(() => {
        async function getProdutos() {
            const playgrounds = await manifest.from("produtos").find();
            setProdutos(playgrounds.data as TProduto[]);
        }


        getProdutos()
    }, [])

    const produtosComFotos = produtos.map(({ Foto1, Foto2, Foto3, Foto4, ...rest }) => {
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