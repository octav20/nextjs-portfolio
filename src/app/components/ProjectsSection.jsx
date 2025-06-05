"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Admin",
    description:
      "Admin Dashboard hecho sobre Next.js, integrando Stripe, Prisma, MySQL y estilado con Tailwind CSS. ",
    image: "/images/projects/ecommerce-admin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/e-commerce-admin",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Spotify Clone",
    description:
      "Spotify clone, hecho con Next.js, Tailwind, Supabase, y Stripe.",
    image: "/images/projects/spotify-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/spotify-clone",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Provedeco",
    description:
      "Landing page para provedeco, Empresa dedicada a la venta de lambrin, laminas de pvc, y otros productos de acabado.",
    image: "/images/projects/provedeco.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/provedeco",
    previewUrl: "https://provedeco.vercel.app",
  },
  {
    id: 4,
    title: 'Statify',
    description:
    'Statify es una app web para visualizar tus estadísticas de Spotify, hecha con Astro y Tailwind CSS.',
    image: '/images/projects/statify.png',
    tag: ['All', 'Web'],
    gitUrl:'https://github.com/octav20/statify_v2',
    previewUrl: 'https://statify-v2.vercel.app/',
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Mis Proyectos
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
