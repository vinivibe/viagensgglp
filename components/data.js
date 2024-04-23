import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Por que escolher Viagens.gg?",
  desc: "Viajar é mais do que se deslocar de um lugar para outro, é mergulhar em novas experiências. Na Viagens.gg, transformamos cada viagem em uma aventura de e-sports inesquecível. Descubra por que somos a escolha número um dos gamers viajantes.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Entenda seus Clientes",
      desc: "Criamos experiências personalizadas que refletem sua paixão e o conectam com o universo dos e-sports de forma única.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Aprimore a Aquisição",
      desc: "Oferecemos pacotes exclusivos que combinam a emoção dos jogos com o prazer de viajar, aumentando a satisfação e a fidelidade do cliente.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Impulsione a Retenção de Clientes",
      desc: "Nossos clientes retornam para novas aventuras, graças às memórias inesquecíveis e ao atendimento excepcional que proporcionamos.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};




export {benefitOne};
