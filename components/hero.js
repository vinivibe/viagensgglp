import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/banner.png";
import heroImgTwo from '../public/img/gaming.png.webp'

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Pressione Start para Novas Aventuras com Viagens.gg!
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Descubra o mundo dos e-sports em viagens planejadas para fãs apaixonados. Viva o jogo, encontre a comunidade e faça memórias que durarão para sempre.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#form"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#EC2468] rounded-md ">
                Inicie essa aventura
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImgTwo}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}



export default Hero;