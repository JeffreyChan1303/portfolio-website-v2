import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FeaturedWorkItemProps {
  title: string;
  tags: Array<string>;
  imgSrc: string;
  href: string;
}

const arrowVariants = {
  linkHover: { x: 0, width: 'max-content', opacity: 1, marginRight: '.5rem' }
};

const FeaturedWorkItem: React.FC<FeaturedWorkItemProps> = ({ title, tags, imgSrc, href }) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  return (
    <motion.a
      ref={inViewRef}
      style={{ opacity: isInView ? 1 : 0, transition: 'ease-in-out 500ms' }}
      whileHover='linkHover'
      className='project-item'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <motion.div className='project-item-main'>
        <motion.img
          whileHover={{ scale: 0.9 }}
          className='project-item-img'
          src={imgSrc}
          alt='featured work item image'
          transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 2 }}
        />
      </motion.div>
      <div className='project-item-footer'>
        <p className='project-item-tags'>{tags.join(' ◦ ')}</p>

        <h3 className='project-item-title'>
          <motion.span
            initial={{ x: -20, width: 0, opacity: 0 }}
            variants={arrowVariants}
            transition={{ ease: 'easeInOut', type: 'spring' }}
            className='featured-work-item__arrow'
          >
            <img
              src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iIzExMjk2OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDE4TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
              alt='Arrow'
              style={{ transform: 'scale(1.2)' }}
            />
          </motion.span>
          {title}
        </h3>
      </div>
    </motion.a>
  );
};

export default FeaturedWorkItem;
