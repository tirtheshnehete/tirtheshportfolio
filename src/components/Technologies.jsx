import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="pb-24"
    >
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h2>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="p-4" whileHover={{ scale: 1.2 }}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4" whileHover={{ scale: 1.2 }}>
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div className="p-4" whileHover={{ scale: 1.2 }}>
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div className="p-4" whileHover={{ scale: 1.2 }}>
          <DiRedis className="text-7xl text-red-600" />
        </motion.div>
        <motion.div className="p-4" whileHover={{ scale: 1.2 }}>
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div className="p-4" whileHover={{ scale: 1.2 }}>
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;