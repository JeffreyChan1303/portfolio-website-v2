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
    imgSrc: 'trackMyProjects.png',
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
    imgSrc: 'ipo_img.jpeg'
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
  return (
    <section id='experience'>
      <div className='timeline'>
        <h1 style={{ fontSize: '5rem', lineHeight: '5.5rem' }}>
          My Journey <span style={{ fontSize: '4rem' }}>and</span> Experience
        </h1>

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
