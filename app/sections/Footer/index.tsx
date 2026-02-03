import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full h-auto bg-[#BC7823] lg:p-[6em]">
      <div className="w-full p-[2em] flex lg:flex-row sm:flex-col justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Nosso Endereço</h4>
          <p className="font-bold">Rua Doutor Eraldo Aurélio Franzese, 71 - Jardim Paiquerê - Valinhos - São Paulo</p>

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
            <h5 className="text-base cursor-pointer">WhatsApp:</h5>
            <h5 className="text-base cursor-pointer">
              <Link href="https://wa.me/5519994814562" target="_blank" rel="noopener noreferrer">(19) 994814562</Link>
            </h5>
          </span>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1761775894858!6m8!1m7!1sO9lIlAQQdYePxf-JI8LzRw!2m2!1d-22.98288023660557!2d-47.01303833351664!3f48.73499293564683!4f-17.800162325064633!5f0.7820865974627469"
          allowFullScreen
          className="lg:w-[400px] lg:h-[300px] sm:w-full sm:h-[200px]"
        ></iframe>
      </div>
    </footer>
  );
}
