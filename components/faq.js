import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Como são selecionados os eventos de e-sports inclusos nos pacotes?",
    answer: "Escolhemos os eventos mais emocionantes e significativos do mundo dos e-sports, garantindo acesso a competições que todo fã sonha em assistir.",
  },
  {
    question: "Os pacotes de viagem incluem treinamento ou interação com jogadores profissionais?",
    answer: "Sim, oferecemos pacotes exclusivos que incluem sessões de treinamento e oportunidades de conhecer seus ídolos do e-sports.",
  },
  {
    question: "Qual é a política de cancelamento e reembolso?",
    answer:
      "Entendemos que planos podem mudar. Nossa política de cancelamento é flexível e está desenhada para dar a você a tranquilidade que precisa.",
  },
  {
    question: "Existem opções de personalização para os pacotes de viagem? ",
    answer:
      "Totalmente personalizável! Nossos pacotes podem ser ajustados para atender às suas preferências e sonhos de viagem.",
  },
  {
    question: "Como funciona o suporte durante a viagem? ",
    answer:
      "Nossa equipe de suporte está disponível 24/7 para garantir que sua experiência de viagem seja tranquila e sem preocupações.",
  },
  {
    question: "Há benefícios para grupos ou comunidades que viajam juntos? ",
    answer:
      "Com certeza! Oferecemos tarifas especiais e benefícios para grupos que querem compartilhar a emoção dos e-sports juntos.",
  },
];

export default Faq;