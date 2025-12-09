"use client";

import { TProduto } from "@/app/types/TProduto";
import { useRouter } from "next/navigation";

type PlaygroundInfo = Pick<TProduto, "Titulo" | "id">;

function savePlaygroundInfo({Titulo, id}: PlaygroundInfo){
  const playgroundInfo = {
    titulo: Titulo,
    ID: id,
  }
  
  return localStorage.setItem('playgroundInfo', JSON.stringify(playgroundInfo));
}

export function BotaoOrcamento({Titulo, id}: PlaygroundInfo){
  const router = useRouter();
  return (
    <>
      <button
        className="lg:w-2/5 sm:w-full mt-8 py-4 rounded-lg bg-[#444A19] text-white font-bold text-lg cursor-pointer"
        onClick={() => {
          savePlaygroundInfo({Titulo, id});
          router.push('/orcamento');
        }}
      >
          Fazer Orçamento
      </button>
    </>
  )
}