"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NextJS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>JavaScript/TypeScript</li>
        <li>Python</li>
        <li>Tailwind CSS</li>
        <li>Angular</li>
        <li>React</li>

      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Autonoma de Occidente, Sinaloa, México</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.webp" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
          <p className="text-base lg:text-lg">
          Soy un apasionado del desarrollo web, motivado por los desafíos y la creatividad. Me encanta diseñar experiencias digitales que cautivan, inspiran y generan impacto. Actualmente, disfruto explorando el potencial de Next.js y TypeScript, aunque siempre estoy en busca de nuevas herramientas y 
          frameworks para enriquecer mi repertorio.Desde proyectos innovadores hasta sitios web elegantes, me involucro por completo en todo lo que implique escribir código. Convertir ideas en soluciones reales y funcionales es mi mayor fortaleza.Cuando no estoy frente al teclado, probablemente estoy 
          escuchando música, viendo buenas películas o tocando la guitarra. Y claro, nunca me pierdo un buen partido de fútbol. ¡Visca el Barça! ⚽️
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
