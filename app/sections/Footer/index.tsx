import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full h-auto bg-[#BC7823] p-[6em]">
      <div className="w-full p-[2em] flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Nosso Endereço</h4>
          <p className="font-bold">Av Rebolças 499 - Jardim Monte Negro - SP</p>

          <h4 className="font-bold text-lg">Horário de Atendimento</h4>
          <p className="font-bold">Segunda à Sexta 07:30 às 12:30 - 13:30 às 17:30</p>

          <ul className="mt-4 flex flex-col gap-4 w-fit">
            <li className="list-none font-bold cursor-pointer">
              <Link href="/playgrounds" className="text-black no-underline">Playgrounds</Link>
            </li>
            <li className="list-none font-bold cursor-pointer">
              <Link href="#" className="text-black no-underline">Orçamento</Link>
            </li>
            <li className="list-none font-bold cursor-pointer">
              <Link href="#" className="text-black no-underline">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Fale Conosco</h4>
          <span className="flex gap-1">
            <h5 className="text-base cursor-pointer">Telefone:</h5>
            <h5 className="text-base cursor-pointer">(19) 34225567</h5>
          </span>
          <span className="flex gap-1">
            <h5 className="text-base cursor-pointer">WhatsApp:</h5>
            <h5 className="text-base cursor-pointer">(19) 999876578</h5>
          </span>
          <span className="flex gap-1">
            <h5 className="text-base cursor-pointer">E-mail:</h5>
            <h5 className="text-base cursor-pointer">contato@mvplaygrounds.com</h5>
          </span>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.3953541629!2d-46.92494058902858!3d-23.681434667112956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-PT!2sbr!4v1745540156242!5m2!1spt-PT!2sbr"
          allowFullScreen
          style={{
            width: '400px',
            border: 0,
            borderRadius: '0.8em',
          }}
        ></iframe>
      </div>
    </footer>
  );
}
