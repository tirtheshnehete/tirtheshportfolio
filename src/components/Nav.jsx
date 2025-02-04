import React from 'react';
import Logo from "../../assets/logot.png";
import { FaSquareXTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='flex items-center justify-between py-6'
    >
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
          <motion.img 
            src={Logo} 
            alt="Logo" 
            className='mx-2 size-30' 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a className='hover:scale-125 duration-200 transition-all' 
          whileHover={{ scale: 1.3 }}
          href="https://www.linkedin.com/in/your-linkedin-profile" 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='LinkedIn'>
          <FaLinkedin/>
        </motion.a>
        <motion.a className='hover:scale-125 duration-200 transition-all' 
          whileHover={{ scale: 1.3 }}
          href="https://www.github.com/in/your-github-profile" 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='GitHub'>
          <FaGithub/>
        </motion.a>
        <motion.a className='hover:scale-125 duration-200 transition-all' 
          whileHover={{ scale: 1.3 }}
          href="https://www.instagram.com/in/your-instagram-profile" 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='Instagram'>
          <FaInstagram/>
        </motion.a>
        <motion.a className='hover:scale-125 duration-200 transition-all' 
          whileHover={{ scale: 1.3 }}
          href="https://www.twitter.com/in/your-twitter-profile" 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='Twitter'>
          <FaSquareXTwitter/>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
