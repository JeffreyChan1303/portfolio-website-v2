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
const timelineItemArray: Array<{
  title: string;
  subtitle: string;
  description: string;
  orientation: TimelineItemOrientation;
}> = [
  {
    title: 'University of Massachusetts Lowell',
    subtitle: '',
    description: 'Currently pursinig a Bachelor of Science in Computer science, and a minor in mathematics.',
    orientation: TimelineItemOrientation.LEFT
  },
  { title: 'Title', subtitle: 'Subtitle', description: 'Description', orientation: TimelineItemOrientation.RIGHT },
  { title: 'Title', subtitle: 'Subtitle', description: 'Description', orientation: TimelineItemOrientation.LEFT },
  { title: 'Title', subtitle: 'Subtitle', description: 'Description', orientation: TimelineItemOrientation.RIGHT },
  { title: 'Title', subtitle: 'Subtitle', description: 'Description', orientation: TimelineItemOrientation.LEFT },
  { title: 'Title', subtitle: 'Subtitle', description: 'Description', orientation: TimelineItemOrientation.RIGHT }
];

const Timeline: React.FC = () => {
  return (
    <div className='timeline'>
      <h1 id='education' style={{ fontSize: '5rem', lineHeight: '5.5rem' }}>
        My Education
      </h1>

      {timelineItemArray.map((item, index) => (
        <TimelineItem
          key={index}
          orientation={item.orientation}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          imgSrc=''
        />
      ))}
    </div>
  );
};

export default Timeline;
