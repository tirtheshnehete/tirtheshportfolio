import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCES } from '../../constants';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className='pb-4'
    >
      <motion.h2 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-stone-400'>
                {experience.year}
              </p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-2 font-semibold'>
                {experience.role} -{" "}
                <span className='text-sm text-stone-500'>
                  {experience.company}
                </span>
              </h3>
              <p className='mb-4 text-stone-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <motion.span 
                  className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300' 
                  key={index}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))} 
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
