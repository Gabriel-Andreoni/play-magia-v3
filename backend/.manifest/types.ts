export interface produto {
  id: string;
  Titulo: string;
  Subtitulo: string;
  Descrição_Card: string;
  Descrição_Produto: string;
  Foto1: { large: string };
  Foto2: { large: string };
  Foto3: { large: string };
  Foto4: { large: string };
}

export interface clientes {
  id: string;
  Foto: { large: string };
  Cliente: string;
}

export interface CreateUpdateprodutoDto {
  Titulo: string;
  Subtitulo: string;
  Descrição_Card: string;
  Descrição_Produto: string;
  Foto1: { large: string };
  Foto2: { large: string };
  Foto3: { large: string };
  Foto4: { large: string };
}

export interface CreateUpdateclientesDto {
  Foto: { large: string };
  Cliente: string;
}
