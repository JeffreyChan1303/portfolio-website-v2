import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const wordVariants = {
  hidden: { y: 50, rotate: '10deg' },
  visible: { y: 0, rotate: 0, transition: { duration: 0.5 } }
};
const Footer = () => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: false });

  return (
    <motion.footer variants={parentVariants} animate={isInView ? 'visible' : 'hidden'} id='footer'>
      <div ref={inViewRef} className='footer__overflow-hidden'>
        {/* This will open up a modal page to show credits */}
        <motion.a variants={wordVariants} className='footer__link'>
          Credits
        </motion.a>
      </div>
      <div>
        <div className='footer__overflow-hidden'>
          <motion.p variants={wordVariants} style={{ textAlign: 'center' }}>
            Contact me at{' '}
          </motion.p>
        </div>
        <div className='footer__overflow-hidden'>
          <motion.a variants={wordVariants} className='footer__link' href='jeffreychan1303@gmail.com'>
            jeffreychan1303@gmail.com
          </motion.a>
        </div>
      </div>
      <div className='footer__social-links'>
        <div className='footer__overflow-hidden'>
          <motion.a
            variants={wordVariants}
            className='footer__link'
            href='https://github.com/JeffreyChan1303'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </motion.a>
        </div>
        <div className='footer__overflow-hidden'>
          <motion.a
            variants={wordVariants}
            className='footer__link'
            href='https://www.linkedin.com/in/jeffrey-chan-1303/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
