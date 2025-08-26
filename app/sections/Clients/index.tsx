import { manifest } from '@/app/lib/manifest';
import Image from 'next/image';

export async function Clients() {
  const clientes = await manifest.from("clientes").find();

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center">
      <div className="w-full p-[4em] flex flex-col items-center">
        <h2 className="text-[6em] text-[#A05625] text-center my-[0.2em]">Nossos Clientes</h2>
        <p className="text-center text-[1.2em] font-bold">Onde Nossos Playgrounds Fazem a Diferença.</p>
      </div>

      <div className="w-full h-full pb-[8em] flex justify-center items-center">
        <ul className="w-full h-full p-[4em] flex justify-center items-center gap-[10em] flex-wrap">
          {clientes.data.map((client: any) => (
            <li key={client.id} className="w-[300px] h-[100px] list-none">
              <Image
                src={client.foto.large}
                alt={client.cliente}
                width={350}
                height={110}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
