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
      "Admin Dashboard built on Next.js, integrating Stripe, Prisma, MySQL, and stylized with Tailwind CSS. ",
    image: "/images/projects/ecommerce-admin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/e-commerce-admin",
    previewUrl: "https://e-commerce-admin-octav20.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce Store",
    description: "E-commerce store built with Next.js and Tailwind CSS.",
    image: "/images/projects/ecommerce-store.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/e-commerce-store",
    previewUrl: "https://e-commerce-store-octav20.vercel.app",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "Spotify clone, built with Next.js, Tailwind, Supabase, and Stripe for an immersive and secure music experience.",
    image: "/images/projects/spotify-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/spotify-clone",
    previewUrl: "https://spotify-clone-octav20.vercel.app/",
  },
  {
    id: 4,
    title: "Tailverse",
    description:
      "Tailverse is your one-stop destination to create and obtain components optimized for Tailwind CSS. ",
    image: "/images/projects/tailverse.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/tailverse.tech",
    previewUrl: "https://tailverse.tech/",
  },
  {
    id: 5,
    title: "Gestario",
    description:
      "Gestario is an inventory manager for recording product entries and exits, built with Next.js",
    image: "/images/projects/gestario.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/octav20/gestario",
    previewUrl: "https://gestario.vercel.app",
  },
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
        My Projects
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
