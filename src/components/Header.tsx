import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6
      }}
      className='header'
    >
      <div className='nav-wrapper'>
        <nav className='nav'>
          <a className='logo' href='#'>
            Jeffrey Chan
          </a>
          <div className='right-menu'>
            <motion.a whileHover={{ scale: 1.1 }} href='#experience'>
              My Journey
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href='#works'>
              Featured Works
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href='#footer'>
              Contact Me
            </motion.a>
          </div>
        </nav>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
