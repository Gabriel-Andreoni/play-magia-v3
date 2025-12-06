import Image from 'next/image';
import Link from 'next/link';
import { BotaoWhatsAppp } from '@/app/componentes/BotaoWhatsAppp';

export function Hero() {
    return (
        <section className="w-full h-screen lg:p-16 sm:p-8 flex flex-col overflow-hidden ">
            <div className={`relative w-full h-[85%] flex flex-col lg:justify-center sm:justify-evenly items-center rounded-[4em] bg-cover bg-center shadow-2xl shadow-slate-950/50 z-[10] after:content-[''] after:w-full after:h-full after:absolute after:inset-0 after:bg-black/50 after:rounded-[4em] after:z-[-1] `} style={{ backgroundImage: `url(/images/hero-background.jpg)` }}>
                
                <h1 className="w-full mb-[0.1em] lg:text-[6em] md:text-[4em] sm:text-[2em] text-center text-white ">
                    Crie <span className="text-[#FAE8BF]">Memórias Incríveis</span>
                </h1>

                <p className="lg:w-[70%] sm:w-full text-[1.2em] text-center leading-[1.5em] text-white font-light sm:text-pretty">
                    Transforme o espaço da sua escola, condomínio ou parque em um lugar mágico.
                </p>
                <p className="lg:w-[70%] sm:w-full text-[1.2em] text-center leading-[1.5em] text-white font-light sm:text-pretty">
                    Com playgrounds seguros, duráveis e cheios de diversão, oferecemos experiências que encantam crianças e tranquilizam adultos. Conheça nossas soluções e crie memórias que vão durar para sempre.
                </p>

                <Link className="w-fit lg:p-6 sm:p-4 mt-8 rounded-full bg-[#4D5020]/95 text-white cursor-pointer text-[1.1em]" href="#produtos">
                    <Image className="" src="/images/down-arrow.png" alt="ícone de um seta para baixo" width={25} height={25} />
                </Link>
                <BotaoWhatsAppp />
            </div>
        </section>
    );
}
