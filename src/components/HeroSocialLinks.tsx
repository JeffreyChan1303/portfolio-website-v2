import { motion } from 'framer-motion';
import linkedinBadge from '../assets/badge/linkedinBadge.svg';
import githubBadge from '../assets/badge/githubBadge.svg';
import experienceBadge from '../assets/badge/experienceBadge.svg';
import featuredWorksBadge from '../assets/badge/featuredWorksBadge.svg';
import githubMark from '../assets/badge/github-mark.png';

const HeroSocialLinks = () => {
  const viewWidth = window.innerWidth;
  console.log(viewWidth);

  return (
    <div className='social-links'>
      <motion.a
        initial={{ translate: 0, scale: 0, opacity: 0 }}
        animate={{ translate: viewWidth > 640 ? '-15rem 1rem' : '-5rem 13rem', scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className='social-link hero-education'
        href='#experience'
      >
        <motion.img
          className='hero-badge'
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
          animate={{
            rotate: 360,
            transition: { duration: 10, repeatType: 'loop', repeat: Infinity, ease: 'linear' }
          }}
          src={experienceBadge}
        />
        <img
          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iIzExMjk2OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDE4TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
          alt='Arrow'
          style={{ transform: 'rotate(90deg) scale(1.5)', zIndex: -1 }}
        />
      </motion.a>
      <motion.a
        initial={{ translate: 0, scale: 0, opacity: 0 }}
        animate={{ translate: '-5rem 3rem', scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className='social-link hero-github'
        href='https://github.com/JeffreyChan1303'
        target='_blank'
        rel='noreferrer noopener'
      >
        <motion.img
          className='hero-badge'
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
          animate={{
            rotate: 360,
            transition: { duration: 10, repeatType: 'loop', repeat: Infinity, ease: 'linear' }
          }}
          src={githubBadge}
        />
        <img width={32} src={githubMark} />
      </motion.a>
      <motion.a
        initial={{ translate: 0, scale: 0, opacity: 0 }}
        animate={{ translate: '5rem 3rem', scale: 1, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className='social-link hero-linkedin'
        href='https://www.linkedin.com/in/jeffrey-chan-1303/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <motion.img
          className='hero-badge'
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
          animate={{
            rotate: 360,
            transition: { duration: 10, repeatType: 'loop', repeat: Infinity, ease: 'linear' }
          }}
          src={linkedinBadge}
        />
        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5LjYzMjQgMEgyLjM2MDczQzEuMDU4NjUgMCAwLjAwMDQ4ODI4MSAxLjAzMjk5IDAuMDAwNDg4MjgxIDIuMzA3MjlWMjkuNjkwOUMwLjAwMDQ4ODI4MSAzMC45NjUyIDEuMDU4NjUgMzIgMi4zNjA3MyAzMkgyOS42MzI0QzMwLjkzNzEgMzIgMzEuOTk5NiAzMC45NjUyIDMxLjk5OTYgMjkuNjkwOVYyLjMwNzI5QzMxLjk5OTYgMS4wMzI5OSAzMC45MzcxIDAgMjkuNjMyNCAwWiIgZmlsbD0iIzBBNjZDMiIvPgo8cGF0aCBkPSJNNC43NDE5NiAxMS45OTc0SDkuNDkyODJWMjcuMjY4Mkg0Ljc0MTk2VjExLjk5NzRaTTcuMTE4NyA0LjQwNjI1QzguNjM2OTMgNC40MDYyNSA5Ljg2OTUzIDUuNjM5MzIgOS44Njk1MyA3LjE1ODQzQzkuODY5NTMgOC42Nzc5NiA4LjYzNjkzIDkuOTExMDEgNy4xMTg3IDkuOTExMDFDNS41OTQ0IDkuOTExMDEgNC4zNjUyMyA4LjY3Nzk2IDQuMzY1MjMgNy4xNTg0M0M0LjM2NTIzIDUuNjM5MzIgNS41OTQzOSA0LjQwNjI1IDcuMTE4NyA0LjQwNjI1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyLjQ3MDIgMTEuOTk2MUgxNy4wMTk3VjE0LjA4MzhIMTcuMDg0OEMxNy43MTc2IDEyLjg4MzIgMTkuMjY2MiAxMS42MTcyIDIxLjU3NTMgMTEuNjE3MkMyNi4zODA4IDExLjYxNzIgMjcuMjY4OSAxNC43NzkxIDI3LjI2ODkgMTguODkxOVYyNy4yNjdIMjIuNTIzMlYxOS44NDA3QzIyLjUyMzIgMTguMDY5OSAyMi40OTI4IDE1Ljc5MTcgMjAuMDU3MSAxNS43OTE3QzE3LjU4NzUgMTUuNzkxNyAxNy4yMTA3IDE3LjcyMTggMTcuMjEwNyAxOS43MTRWMjcuMjY3SDEyLjQ3MDJWMTEuOTk2MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=' />
      </motion.a>
      <motion.a
        initial={{ translate: 0, scale: 0, opacity: 0 }}
        animate={{ translate: viewWidth > 640 ? '15rem 1rem' : '5rem 13rem', scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className='social-link hero-experience'
        href='#works'
      >
        <motion.img
          className='hero-badge'
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
          animate={{
            rotate: 360,
            transition: { duration: 10, repeatType: 'loop', repeat: Infinity, ease: 'linear' }
          }}
          src={featuredWorksBadge}
        />
        <img
          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iIzExMjk2OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDE4TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
          alt='Arrow'
          style={{ transform: 'rotate(90deg) scale(1.5)', zIndex: -1 }}
        />
      </motion.a>
    </div>
  );
};

export default HeroSocialLinks;
