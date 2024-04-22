import React from 'react';
import { motion } from 'framer-motion';
import linkedinBadge from '../assets/badge/linkedinBadge.svg';

const Hero = () => {
  return (
    <motion.div className='hero'>
      <div className='hero-wrapper'>
        <div className='hero-content'>
          <h1 className='hero-title'>Software engineer,</h1>
          <h1 className='hero-title'>Full-stack developer</h1>
          <h3 className='hero-subtitle'>Specialized in</h3>
          <h2 className='hero-subtitle'>Building Websites & Webapps</h2>

          <div className='social-links'>
            <motion.a
              initial={{ translate: 0, scale: 0, opacity: 0 }}
              animate={{ translate: '-15rem 1rem', scale: 1, opacity: 1 }}
              className='social-link'
            >
              Education
            </motion.a>
            <motion.a
              initial={{ translate: 0, scale: 0, opacity: 0 }}
              animate={{ translate: '-5rem 3rem', scale: 1, opacity: 1 }}
              className='social-link'
            >
              github
            </motion.a>
            <motion.a
              initial={{ translate: 0, scale: 0, opacity: 0 }}
              animate={{ translate: '5rem 3rem', scale: 1, opacity: 1 }}
              className='social-link'
            >
              <motion.img
                className='hero-badge'
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
                animate={{ rotate: 360, transition: { duration: 10, repeatType: 'loop', repeat: Infinity } }}
                src={linkedinBadge}
              />
              <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5LjYzMjQgMEgyLjM2MDczQzEuMDU4NjUgMCAwLjAwMDQ4ODI4MSAxLjAzMjk5IDAuMDAwNDg4MjgxIDIuMzA3MjlWMjkuNjkwOUMwLjAwMDQ4ODI4MSAzMC45NjUyIDEuMDU4NjUgMzIgMi4zNjA3MyAzMkgyOS42MzI0QzMwLjkzNzEgMzIgMzEuOTk5NiAzMC45NjUyIDMxLjk5OTYgMjkuNjkwOVYyLjMwNzI5QzMxLjk5OTYgMS4wMzI5OSAzMC45MzcxIDAgMjkuNjMyNCAwWiIgZmlsbD0iIzBBNjZDMiIvPgo8cGF0aCBkPSJNNC43NDE5NiAxMS45OTc0SDkuNDkyODJWMjcuMjY4Mkg0Ljc0MTk2VjExLjk5NzRaTTcuMTE4NyA0LjQwNjI1QzguNjM2OTMgNC40MDYyNSA5Ljg2OTUzIDUuNjM5MzIgOS44Njk1MyA3LjE1ODQzQzkuODY5NTMgOC42Nzc5NiA4LjYzNjkzIDkuOTExMDEgNy4xMTg3IDkuOTExMDFDNS41OTQ0IDkuOTExMDEgNC4zNjUyMyA4LjY3Nzk2IDQuMzY1MjMgNy4xNTg0M0M0LjM2NTIzIDUuNjM5MzIgNS41OTQzOSA0LjQwNjI1IDcuMTE4NyA0LjQwNjI1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyLjQ3MDIgMTEuOTk2MUgxNy4wMTk3VjE0LjA4MzhIMTcuMDg0OEMxNy43MTc2IDEyLjg4MzIgMTkuMjY2MiAxMS42MTcyIDIxLjU3NTMgMTEuNjE3MkMyNi4zODA4IDExLjYxNzIgMjcuMjY4OSAxNC43NzkxIDI3LjI2ODkgMTguODkxOVYyNy4yNjdIMjIuNTIzMlYxOS44NDA3QzIyLjUyMzIgMTguMDY5OSAyMi40OTI4IDE1Ljc5MTcgMjAuMDU3MSAxNS43OTE3QzE3LjU4NzUgMTUuNzkxNyAxNy4yMTA3IDE3LjcyMTggMTcuMjEwNyAxOS43MTRWMjcuMjY3SDEyLjQ3MDJWMTEuOTk2MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=' />
            </motion.a>
            <motion.a
              initial={{ translate: 0, scale: 0, opacity: 0 }}
              animate={{ translate: '15rem 1rem', scale: 1, opacity: 1 }}
              className='social-link'
            >
              Experience
            </motion.a>
          </div>
        </div>
      </div>
      <button className='group flex items-center gap-3'>
        <svg
          className='group-hover:animate-pulse'
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='48' height='48' rx='24' fill='#FDFDF8'></rect>
          <path d='M11.5 25L23.875 35L35.5 25' stroke='#1655F3' stroke-width='3'></path>
          <line
            y1='-1.5'
            x2='24'
            y2='-1.5'
            transform='matrix(0 1 1 0 25.5 10)'
            stroke='#1655F3'
            stroke-width='3'
          ></line>
        </svg>
        Scroll down to learn more.
      </button>
    </motion.div>
  );
};

export default Hero;
