import React, { useRef } from 'react';
import TimelineItem from './TimelineItem';
import { TimelineItemOrientation } from '../types';
import { motion, useScroll, useSpring } from 'framer-motion';

// interface TimelineProps {
//   children: ReactNode;
// }

/*
Items I'll probably have on this timeline
- high school mvrcs??
- fitness staff
- Education
- Mechanical Engineering
- Switch to Software Engineering
- summer 2022: project tracker 
- academic year 2022-2023 research intern
- Athenahealth summer 2023
- nov - may 2024: full-stack devel
- jan - may 2024: research intern
- feb - june 2024: mitll web dev co-op
- summer 2024: athenahealth

*/

const Timeline: React.FC = () => {
  const scrollProgressYRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollProgressYRef,
    offset: ['start start', 'end end']
  });
  const scaleY = useSpring(scrollYProgress);

  return (
    <div className='timeline'>
      {/* <motion.div className='timeline-line'>
        <motion.div className='timeline-line-progress' style={{ scaleY }}></motion.div>
      </motion.div> */}
      <TimelineItem
        orientation={TimelineItemOrientation.LEFT}
        title='Title'
        subtitle='Subtitle'
        description='Description'
      />
      <TimelineItem
        orientation={TimelineItemOrientation.RIGHT}
        title='Title'
        subtitle='Subtitle'
        description='Description'
      />
      <TimelineItem
        orientation={TimelineItemOrientation.LEFT}
        title='Title'
        subtitle='Subtitle'
        description='Description'
      />
      <TimelineItem
        orientation={TimelineItemOrientation.RIGHT}
        title='Title'
        subtitle='Subtitle'
        description='Description'
      />
    </div>
  );
};

export default Timeline;
