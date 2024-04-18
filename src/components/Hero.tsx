import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div className='hero'>
      <div className='hero-wrapper'>
        <div className='hero-content'>
          <h1 className='hero-title'>Software engineer,</h1>
          <h1 className='hero-title'>Full-stack developer</h1>
          <h3 className='hero-subtitle'>Specialized in</h3>
          <h2 className='hero-subtitle'>Websites & Webapps</h2>

          <div className='social-links'>
            <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='social-link'>
              Linked in
            </motion.a>
            <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='social-link'>
              Linked in
            </motion.a>
            <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='social-link'>
              github
            </motion.a>
            <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='social-link'>
              Linked in
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
