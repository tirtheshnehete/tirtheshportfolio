import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../../constants";
import { useInView } from "react-intersection-observer";

const Project = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

          return (
            <motion.div 
              key={index} 
              ref={ref}
              className="mb-16 flex flex-wrap lg:justify-center bg-stone-900 bg-opacity-80 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-full lg:w-1/4"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.img
                  src={project.image}
                  className="mb-6 rounded shadow-md"
                  alt={project.title}
                  width={250}
                  height={250}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <motion.div 
                className="w-full max-w-xl lg:w-3/4"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="mb-2 font-semibold text-2xl text-white">{project.title}</h3>
                <p className="mb-4 text-stone-300">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    className="mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-white"
                    key={index}
                    whileHover={{ scale: 1.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
