import backgroundCard1 from './images/about-image-1.jpg';
import backgroundCard2 from './images/about-image-2.jpg';
import backgroundCard3 from './images/about-image-3.jpg';
import backgroundCard4 from './images/about-image-4.jpg';



export function About() {
  return (
    <section className="w-full h-auto p-[6em]">
      <h2 className="mb-2 text-center text-[6em] text-[#A05625]">Transformando Espaços em Experiências</h2>

      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-[2em] pt-[2em] pl-[2em] pb-[2em]">
          {/* Card 1 */}
          <div
            className="w-full h-[300px] p-4 flex flex-col justify-end gap-4 rounded-[0.8em] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundCard1.src})` }}
          >
            <div className="absolute inset-0 bg-black/35  rounded-[0.8em]" />
            <h2 className="text-white text-[1.8em] z-10">Projetos Personalizados</h2>
            <p className="w-[80%] text-white text-md text-balance font-light mb-8 z-10">
              Criação de playgrounds de madeira sob medida, adaptados ao espaço, orçamento e necessidades do cliente, elaborados por uma equipe de engenharia especializada.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="w-full h-[500px] p-4 flex flex-col justify-end rounded-[0.8em] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundCard2.src})` }}
          >
            <div className="absolute inset-0 bg-black/35  rounded-[0.8em]" />
            <h2 className="text-white text-[1.8em] z-10">Qualidade e Durabilidade</h2>
            <p className="w-[80%] text-white text-md font-light text-balance mb-8 z-10">
              Utilização de madeira tratada de alta resistência, materiais de alta performance e técnicas de carpintaria artesanal para garantir a longevidade e segurança dos brinquedos.
            </p>
          </div>
        </div>

        {/* Segunda Coluna */}
        <div className="w-full md:w-1/2 flex flex-col gap-[2em] pt-[2em] pl-[2em] pr-[2em] pb-[2em]">
          {/* Card 3 */}
          <div
            className="w-full h-[300px] p-4 flex flex-col justify-end gap-4 rounded-[0.8em] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundCard3.src})` }}
          >
            <div className="absolute inset-0 bg-black/35  rounded-[0.8em]" />
            <h2 className="text-white text-[1.8em] z-10">Consultoria Completa</h2>
            <p className="w-[80%] text-white text-md font-light text-balance mb-8 z-10">
              Oferecemos suporte especializado desde a concepção até a instalação do playground, buscando o melhor custo-benefício e otimização do espaço.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="w-full h-[500px] p-4 flex flex-col justify-end rounded-[0.8em] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundCard4.src})` }}
          >
            <div className="absolute inset-0 bg-black/35  rounded-[0.8em]" />
            <h2 className="text-white text-[1.8em] z-10">Benefícios e Valorização</h2>
            <p className="w-[80%] text-white text-md font-light text-balance mb-8 z-10">
              Os playgrounds estimulam o desenvolvimento motor, a interação social e a criatividade das crianças, além de valorizar o ambiente com segurança e estilo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
