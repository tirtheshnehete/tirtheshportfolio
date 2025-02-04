import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../../constants';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className='border-t border-stone-900 pb-20'
      whileInView={{ opacity: 1, y: 0 }}  // Slide in from below
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is visible
    >
      <motion.h2 
        className='my-10 text-center text-4xl'
        initial={{ opacity: 0, scale: 0.8, x: -100 }} // Slide in from the left
        animate={{ opacity: 1, scale: 1, x: 0 }} // Final position
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }} // Trigger sliding in
        viewport={{ once: true, amount: 0.1 }}
      >
        Get in Touch
      </motion.h2>
      <motion.div 
        className='text-center tracking-tighter'
        initial={{ opacity: 0, y: 20, x: -100 }} // Slide in from the left
        animate={{ opacity: 1, y: 0, x: 0 }} // Final position
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}  // Trigger slide-in
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p className='my-4' whileHover={{ scale: 1.05 }}>
          {CONTACT.address}
        </motion.p>
        <motion.p className='my-4' whileHover={{ scale: 1.05 }}>
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a 
          href="#" 
          className='border-b'
          whileHover={{ scale: 1.1, color: '#3498db' }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
