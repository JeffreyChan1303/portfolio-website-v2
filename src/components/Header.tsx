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
          <a className='logo'>Jeffrey Chan</a>
          <ul className='right-menu'>
            <li>
              <a href=''>About Me</a>
            </li>
            <li>
              <a href=''>Contact Me</a>
            </li>
          </ul>
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
