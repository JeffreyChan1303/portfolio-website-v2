import React, { useRef } from 'react';
import TimelineItem from './TimelineItem';
import { TimelineItemOrientation } from '../types';
import { motion, useInView } from 'framer-motion';

const timelineItemArray: Array<{
  title: string;
  subtitle: string;
  description: string;
  orientation: TimelineItemOrientation;
  imgSrc: string;
  linkText?: string;
  linkHref?: string;
}> = [
  {
    title: 'University of Massachusetts Lowell',
    subtitle: 'expected graduation: December 2024',
    description: 'Currently pursinig a Bachelor of Science in Computer science, and a minor in mathematics.',
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'UML-Logo.png',
    linkText: 'View UML website',
    linkHref: 'https://www.uml.edu/'
  },
  {
    title: 'YMCA Fitness Staff',
    subtitle: 'Mystic Valley YMCA - June 2021 - August 2021',
    description: `During highschool I enjoyed weight lifting and 
  staying healty so I got myself a NASM Personal Trainer certification and got myself a job at the local YMCA`,
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'ymca-3-logo-svg-vector.svg',
    linkText: 'View Malden YMCA website',
    linkHref: 'https://mv-ymca.org/'
  },
  {
    title: 'Personal Project: Project Tracker',
    subtitle: 'May 2022 - August 2022',
    description: `This is something I worked on when I couldn't find a job and I wanted to keep my skills sharp. 
    This is also one of the projects I'm the most proud of because of the time I spent on it.`,
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'trackMyProjectsDashboard.png',
    linkText: 'View Project Tracker',
    linkHref: 'https://www.trackmyprojects.org/'
  },
  {
    title: 'UML Research Intern (network security)',
    subtitle: 'August 2022 - May 2023',
    description:
      'Had a research assistant job with a cybersecurity professor. I learned a lot about network security and even got my name on a paper. (Remeber to put the pepts paper here))',
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'network_security_img.png',
    linkText: 'View Paper Submission',
    linkHref: 'https://submit.petsymposium.org/2024.1/paper/54?cap=hcav54svgRTisvnBsTLSowtQwwTayc'
  },
  {
    title: 'Athenahealth Software Engineering Intern',
    subtitle: 'June 2023 - August 2023',
    description: 'Description',
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'athenahealth-icon.png',
    linkText: 'View Athenahealth website',
    linkHref: 'https://www.athenahealth.com/'
  },
  {
    title: 'Fullstack Developer',
    subtitle: 'November 2023 - May 2024',
    description: 'Created a webapp the researchers could use to faciltate thier research over the web.',
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'medtask_img.png'
  },
  {
    title: 'UML Research Intern (Business Social Media Analytics)',
    subtitle: 'January 2024 - May 2024',
    description: 'Description',
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'X_logo.svg'
  },
  {
    title: 'MIT Lincoln Laboratory Web Development Co-op',
    subtitle: 'February 2024 - June 2024',
    description: 'Description',
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'Lincoln_Lab_icon.png',
    linkText: 'View MITLL website',
    linkHref: 'https://www.ll.mit.edu/'
  },
  {
    title: 'Athenahealth Software Engineering Intern',
    subtitle: 'June 2024 - August 2024',
    description: '2nd comback at athenahealth. I was able to work on a project that was very important to the company.',
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'athenahealth-icon.png',
    linkText: 'View Athenahealth website',
    linkHref: 'https://www.athenahealth.com/'
  }
];

const Timeline: React.FC = () => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  return (
    <section id='experience'>
      <div className='timeline'>
        <div ref={inViewRef}>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: 'max(10vw, 5rem)' }}
              className='timeline-title timeline-title__journey'
              transition={{
                x: { delay: 0.75 },
                y: { delay: 0.25 }
              }}
              animate={isInView && { x: '6vw', y: '0px' }}
            >
              Journey
            </motion.h1>
          </div>
          <div
            style={{
              overflow: 'hidden'
            }}
          >
            <motion.h2
              initial={{ x: 'calc(6vw)', y: '10vw' }}
              className='timeline-title__and'
              transition={{
                x: { delay: 0.75 },
                y: { delay: 0.25 }
              }}
              animate={isInView && { x: '24vw', y: '0' }}
            >
              and
            </motion.h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              className='timeline-title timeline-title__experience'
              transition={{
                x: { delay: 0.75 },
                y: { delay: 0.25 }
              }}
              animate={isInView && { x: '18vw', y: '0' }}
            >
              Experience
            </motion.h1>
          </div>
        </div>

        {timelineItemArray.map((item, index) => (
          <TimelineItem
            key={index}
            orientation={item.orientation}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            imgSrc={item.imgSrc}
            linkText={item.linkText}
            linkHref={item.linkHref}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
