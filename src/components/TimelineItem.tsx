import React, { useRef, useEffect } from 'react';
import { TimelineItemOrientation } from '../types';
import { motion, useInView } from 'framer-motion';

interface TimelineItemProps {
  orientation: TimelineItemOrientation;
  title: string;
  subtitle: string;
  description: string;
}

const buttonVariants = {
  hover: { scale: 1 }
};
const arrowVariants = {
  arrowInitial: { x: -30, width: 0, opacity: 1 },
  hover: { x: 0, width: 'max-content', opacity: 1, marginRight: '.5rem' }
};

const TimelineItem: React.FC<TimelineItemProps> = ({ orientation, title, subtitle, description }) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {});

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <div
      ref={inViewRef}
      className={
        'timeline-item ' +
        (orientation === TimelineItemOrientation.LEFT ? 'timeline-item--left' : 'timeline-item--right')
      }
    >
      <div className='timeline-item-opposite grid__timeline-opposite'> </div>
      <div className='grid__timeline'></div>
      <div
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
        className='timeline-item-content grid__timeline-content'
      >
        <h1 className='timeline-content--title'>{title}</h1>
        <hr></hr>
        <h3 className='timeline-content--subtitle'>{subtitle}</h3>
        <p className='timeline-content--description'>{description}</p>
        {/* call to action */}
        <motion.a variants={buttonVariants} whileHover='hover' className='button' href='/'>
          <motion.span variants={arrowVariants} transition={{ ease: 'easeInOut' }} className='arrow'>
            <img
              src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iIzExMjk2OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDE4TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2TDE5IDEyIiBzdHJva2U9IiMxMTI5NjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
              alt='Arrow'
            />
          </motion.span>
          About me
        </motion.a>
      </div>
    </div>
  );
};

export default TimelineItem;
