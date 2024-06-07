import React, { useRef, useEffect } from 'react';
import { TimelineItemOrientation } from '../types';
import { delay, motion, useInView } from 'framer-motion';

interface TimelineItemProps {
  orientation: TimelineItemOrientation;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  linkText?: string;
  linkHref?: string;
}

const arrowVariants = {
  arrowInitial: { x: -30, width: 0, opacity: 1 },
  hover: { x: 0, width: 'max-content', opacity: 1, marginRight: '.5rem' }
};

// Define variants for the parent
const containerVariants = {
  // hidden: { opacity: 0 },

  visible: {
    transition: {
      ease: 'easeInOut',
      duration: 2,
      staggerChildren: 0.1, // Stagger animations of children by 0.1 seconds
      delayChildren: 0.2 // Delay the animations of children by 0.5 seconds
    }
  }
};

// Define variants for the children
const childVariants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
  hover: {}
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  orientation,
  title,
  subtitle,
  description,
  imgSrc,
  linkText,
  linkHref
}) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={inViewRef}
      className={
        'timeline-item ' +
        (orientation === TimelineItemOrientation.LEFT ? 'timeline-item--left' : 'timeline-item--right')
      }
    >
      <a
        className='timeline-item-opposite grid__timeline-opposite'
        href={linkHref}
        target='_blank'
        rel='noopener noreferrer'
      >
        {linkHref ? (
          <motion.img
            whileHover={{ scale: 0.95, filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='timeline-img'
            src={imgSrc}
            alt='timeline item image'
          />
        ) : (
          <motion.img className='timeline-img' src={imgSrc} alt='timeline item image' />
        )}
      </a>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView && 'visible'}
        className='timeline-item-content grid__timeline-content'
      >
        <motion.h1 variants={childVariants} className='timeline-content--title'>
          {title}
        </motion.h1>
        <motion.h3 variants={childVariants} className='timeline-content--subtitle'>
          {subtitle}
        </motion.h3>
        <motion.hr variants={childVariants}></motion.hr>
        <motion.p variants={childVariants} className='timeline-content--description'>
          {description}
        </motion.p>
        {/* call to action */}
        {linkText && linkHref && (
          <motion.a
            variants={childVariants}
            whileHover='hover'
            // initial='hidden'
            // animate={isInView && 'visible'}
            style={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -36, transition: 'ease-in-out 500ms 500ms' }}
            className='button'
            href={linkHref}
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.span variants={arrowVariants} className='arrow'>
              <img
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iIzExMjk2OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDE4TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
                alt='Arrow'
              />
            </motion.span>
            {linkText}
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
