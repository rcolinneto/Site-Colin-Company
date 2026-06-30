import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MetodoRaiz from "@/components/MetodoRaiz";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Investimento from "@/components/Investimento";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetodoRaiz />
        <Servicos />
        <ComoFunciona />
        <Investimento />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
