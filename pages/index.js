import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Forms from '../components/forms'

const Home = () => {
  return (
    <>
      <Head>
        <title>Viagens.gg – Sua jornada épica começa aqui!</title>
        <meta
          name="description"
          content="Viagens.gg: Embarque em experiências únicas de viagem com foco em e-sports. Descubra pacotes exclusivos para assistir aos maiores eventos de e-sports ao vivo e treinar com profissionais. A sua próxima grande aventura gamer começa aqui!"
        />
        <link rel="icon" href="https://i.postimg.cc/FzR9dPtb/favicon-removebg-preview-2.png" />
      </Head>

      <Navbar />
      <Hero />
      <Forms />
      <SectionTitle
        pretitle="Vantagens Exclusivas da Viagens.gg"
        title=" Por que escolher Viagens.gg?">
        A Viagens.gg redefine o conceito de viajar com serviços que vão além do convencional. Entendemos o espírito gamer e personalizamos cada aspecto da sua viagem para garantir que cada momento seja épico. Da reserva ao retorno, sua satisfação é nossa missão principal.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Assista ao Vídeo e Inspire-se"
        title="Descubra o Universo Viagens.gg">
        Veja como cada viagem se transforma em uma aventura épica! Este espaço é dedicado a apresentar um vislumbre das experiências inigualáveis que oferecemos. Portanto, mergulhe nesta experiência interativa e veja o que torna a Viagens.gg única. Aventure-se com a gente.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Depoimentos"
        title="O que os Viajantes da Viagens.gg Dizem">
        Confira as histórias reais de entusiastas de e-sports que transformaram suas paixões em viagens épicas
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Dúvidas de Campeões Resolvidas">
        Tem perguntas? Nós temos as respostas que ajudarão a preparar sua próxima viagem para o mundo dos e-sports!
      </SectionTitle>
      <Faq />
      <Cta />
    </>
  );
}

export default Home;