export type TProduto = {
    id: string,
    Titulo: string,
    Subtitulo: string,
    Descrição_Card?: string,
    Descrição_Produto: string,
    fotos: string[],
    Foto1: {large: string},
    Foto2?: {large: string},
    Foto3?: {large: string},
    Foto4?: {large: string},
}