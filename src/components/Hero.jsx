import React from "react";
import ProfilePic from "../../assets/pic.png";
import { HERO_CONTENT } from "../../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="pb-4 lg:mb-36" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-wrap lg:flex-row-reverse"
      >
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={ProfilePic}
              alt="profile pic"
              className="border border-stone-900 rounded-3xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childVariants}
              className="font-serif pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Tirthesh Nehete
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/Tirthesh-res.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-md hover:shadow-xl transition-all"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
