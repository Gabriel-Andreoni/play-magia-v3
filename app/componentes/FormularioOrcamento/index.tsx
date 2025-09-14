"use client";
import { useState } from "react";
import Image from "next/image"
import PlusIcon from './img/plus.png';


export function FormularioOrcamento() {
    const [hasMessage, setHasMessage] = useState<boolean>(false);

    return (
        <>
            <h2 className="font-bold">Seus Dados</h2>
            <form className="flex flex-col gap-4 p-4">
                <div className="flex flex-col justify-start">
                    <label className="font-light" htmlFor="nome">Nome Completo</label>
                    <input className="p-2 border rounded-lg outline-none" type="text" name="nome" id="nome" />
                </div>
                <div className="flex gap-2">
                    <div className="w-1/2 flex flex-col justify-start">
                        <label className="font-light" htmlFor="email">E-mail</label>
                        <input className="p-2 border rounded-lg outline-none" type="text" name="email" id="email" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-start">
                        <label className="font-light" htmlFor="telefone">Telefone</label>
                        <input className="p-2 border rounded-lg outline-none" type="text" name="telefone" id="telefone" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-1/2 flex flex-col justify-start">
                        <label className="font-light" htmlFor="cidade">Cidade</label>
                        <input className="p-2 border rounded-lg outline-none" type="text" name="cidade" id="cidade" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-start">
                        <label className="font-light" htmlFor="estado">UF</label>
                        <input className="p-2 border rounded-lg outline-none" type="text" name="estado" id="estado" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Image className="cursor-pointer" onClick={() => setHasMessage((prevState) => !prevState)} src={PlusIcon.src} width={24} height={24} alt="Adicionar Observações" />
                    <span className="font-bold text-sm">Adicionar Observações</span>
                </div>

                {hasMessage && (
                    <div className="flex flex-col justify-start">
                        <label className="font-light" htmlFor="observacao">Observações</label>
                        <textarea className="p-2 border rounded-lg outline-none resize-none" name="observacao" id="observacao"></textarea>
                    </div>
                )}
                <button className="p-4 border rounded-lg bg-[#4d5020] text-white font-light cursor-pointer">Enviar</button>
            </form>
        </>
    )
}