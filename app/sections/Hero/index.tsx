import HeroImage from './img/hero-background.jpg';
import ArrowDown from './img/down-arrow.png'
import Image from 'next/image';
import Link from 'next/link';
import { BotaoWhatsAppp } from '@/app/componentes/BotaoWhatsAppp';

export function Hero() {
    return (
        <section className="w-full h-screen p-16 flex flex-col overflow-hidden ">
            <div className={`relative w-full h-[85%] flex flex-col justify-center items-center rounded-[4em] bg-cover bg-center shadow-2xl shadow-slate-950/50 z-[10] after:content-[''] after:w-full after:h-full after:absolute after:inset-0 after:bg-black/50 after:rounded-[4em] after:z-[-1] `} style={{ backgroundImage: `url(${HeroImage.src})` }}>
                
                <h1 className="w-full mb-[0.1em] lg:text-[6em] md:text-[4em] text-center text-white ">
                    Crie <span className="text-[#FAE8BF]">Memórias Incríveis</span>
                </h1>

                <p className="w-[70%] text-[1.2em] text-center leading-[1.5em] text-white font-light">
                    Transforme o espaço da sua escola, condomínio ou parque em um lugar mágico.<br/> Com playgrounds seguros, duráveis e cheios de diversão, oferecemos experiências que encantam crianças e tranquilizam adultos. Conheça nossas soluções e crie memórias que vão durar para sempre.
                </p>

                <Link className="w-fit p-6 mt-8 rounded-full bg-[#4D5020]/95 text-white cursor-pointer text-[1.1em]" href="#produtos">
                    <Image src={ArrowDown.src} alt="ícone de um seta para baixo" width={25} height={25} />
                </Link>
                <BotaoWhatsAppp />
            </div>
        </section>
    );
}
