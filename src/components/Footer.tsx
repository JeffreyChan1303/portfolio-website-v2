import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id='footer'>
      <div>
        {/* This will open up a modal page to show credits */}
        <a className='footer__link'>Credits</a>
      </div>
      <div>
        <p style={{ textAlign: 'center' }}>Contact me at </p>
        <a className='footer__link' href='jeffreychan1303@gmail.com'>
          jeffreychan1303@gmail.com
        </a>
      </div>
      <div className='footer__social-links'>
        <a className='footer__link' href='https://github.com/JeffreyChan1303' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
        <a
          className='footer__link'
          href='https://www.linkedin.com/in/jeffrey-chan-1303/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
      </div>
      {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Quick Links</h2>
        <a>Github</a>
        <a>LinkedIn</a>
        <a>My Journey</a>
        <a>Featured Works</a>
        <a>Resume</a>
        <a>Scroll Back Up</a>
      </div>
      <div>
        <a>Send me a message</a>
        <input type='text' placeholder='Your Name' />
        <input type='text' placeholder='Your Email' className='contact-me-email' />
        <textarea placeholder='Your Message'></textarea>
      </div> */}
    </footer>
  );
};

export default Footer;
