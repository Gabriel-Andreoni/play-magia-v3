import { Menu } from "./componentes/Menu";
import { About } from "./sections/About";
import { Clients } from "./sections/Clients";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { ProductList } from "./sections/ProductList";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
        <Menu />
        <Hero />
        <ProductList />
        <About />
        <Clients />
        <Footer />
    </div>
  )
}
