import { StaticImageData } from "next/image"

export type TProduto = {
    id: string,
    Titulo: string,
    Subtitulo: string,
    Descrição_Card?: string,
    Descrição_Produto: string,
    Foto1: {large: StaticImageData},
    Foto2?: {large: StaticImageData},
    Foto3?: {large: StaticImageData},
    Foto4?: {large: StaticImageData},
}