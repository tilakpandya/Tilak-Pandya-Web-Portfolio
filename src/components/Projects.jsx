import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
    <section id="projects">
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
        {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/4"
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1}}>
            <img 
                src={project.image} 
                alt={project.title} 
                width={150} 
                height={150} 
                className="mb-6 rounded object-cover w-[150px] h-[150px]"
            />
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity:0, x: 100}}
            transition={{duration: 1}}
            className="w-full lg:w-3/4">
                <div className="flex gap-2">
                    <h6 className="mb-2 font-semibold">{project.title} </h6> 
                    <a className="mb-8 text-2xl" href={project.githubLink} target="_blank"><FaGithub /></a>
                </div>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech,index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                    {tech}
                </span>
            ))}
            </motion.div>
        </div>
        ))}
    </div>
    </div>
    </section>
    );
};
  
  export default Projects;
