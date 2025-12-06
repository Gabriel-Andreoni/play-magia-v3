import { getPlaygrounds } from "@/app/lib/playgrounds/getPlaygrounds";
import { ProdutosSlider } from "./ProdutosSlider";

export async function SlideDosProdutos() {
    const produtos = await getPlaygrounds();

    const fotosRaw = produtos.data.map((p) => ({
        titulo: p.Titulo,
        fotos: [p.Foto1, p.Foto2, p.Foto3, p.Foto4].filter((f) => f != null),
    }));

    const fotos = fotosRaw.map((f) => ({
        titulo: f.titulo,
        fotos: f.fotos[0],
    }));

    return (
        <ProdutosSlider fotos={fotos.reverse()} />
    );
}
