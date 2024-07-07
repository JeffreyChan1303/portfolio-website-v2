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
    description: `Currently pursing a Bachelor of Science in Computer science, and a minor in mathematics. Started out as a 
    mechanical engineering major but switched to computer science after I realized I enjoyed coding and the versatility of the field
    much more.`,
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'UML-Logo.png',
    linkText: 'View UML website',
    linkHref: 'https://www.uml.edu/'
  },
  {
    title: 'YMCA Fitness Staff',
    subtitle: 'Mystic Valley YMCA - June 2021 - August 2021',
    description: `During highschool I really enjoyed weight lifting and 
  staying fit and healthy. I would be in the gym on average about 6 days a week and would stay there for about 2 hours every
   day. I got so invested and has so much fun that I got myself a NASM (National Academy of Sports Medicine) Personal Trainer certification and went for a job at my local YMCA.
  This was my initial passion before COVID-19 struck and I lost my passion for weight lifting and exercise since then. Although I'm still
  active, and I still enjoy working out, I'm not as invested as I was before.`,
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'ymca-3-logo-svg-vector.svg',
    linkText: 'View Mystic Valley YMCA website',
    linkHref: 'https://mv-ymca.org/'
  },
  {
    title: 'Personal Project: Project Tracker',
    subtitle: 'May 2022 - August 2022',
    description: `This is something I worked on when I couldn't find a job my freshman year of college. I felt as if I was behind as a software engineer
    so I wanted to build a project that would allow me to learn a lot of different technologies and frameworks. I used React, Node.js, and MongoDB to build this project. 
    In hindsight, this is one of the projects that I'm the most proud of because of the things I learned, time I invested, and 
    the passion I found for Full-stack development.`,
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'trackMyProjectsDashboard.png',
    linkText: 'View Project Tracker',
    linkHref: 'https://www.trackmyprojects.org/'
  },
  {
    title: 'UML Research Intern (network security)',
    subtitle: 'August 2022 - May 2023',
    description: `This was my first research experience that I had. This opportunity was given through UMass Lowell's Immersive Scholars Program. 
      I learned a lot about network security and about the research process. For this research, I utilized Python to build and test algorithms, but also 
      create plots to analyze the data we found form the different algorithms. I was also able to be part of a paper submission to the Privacy 
      Enhancing Technologies Symposium (PETS).`,
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'network_security_img.png',
    linkText: 'View Paper Submission',
    linkHref: 'https://submit.petsymposium.org/2024.1/paper/54?cap=hcav54svgRTisvnBsTLSowtQwwTayc'
  },
  {
    title: 'Athenahealth Software Engineering Intern',
    subtitle: 'June 2023 - August 2023',
    description: `This was my first internship as a software engineer and in a corporate setting. This was a great experience and it was my first time working in a large codebase,
    in Agile, and with a dedicated team in general. I also learned a lot about the healthcare industry and how software is used in it. I was able to work on the Care Collaboration division whose 
    goal is to help care managers and care coordinators manage their patients and their care. I mainly used React and Spring boot to build the features I was assigned.`,
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'athenahealth-icon.png',
    linkText: 'View Athenahealth website',
    linkHref: 'https://www.athenahealth.com/'
  },
  {
    title: 'Fullstack Developer',
    subtitle: 'November 2023 - May 2024',
    description: `In this position, I was hired to build a project that allowed researchers to collect data for their research through the web. Their 
    research was about the effects of breaks or rest on productivity when doing a repetitive task. I used Angular, Node.js, and MySQL to build this project. I 
    was able to help the researchers collect data over the web and aggregated over 30,000 data points for analysis.`,
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'medtask_img.png'
  },
  {
    title: 'UML Research Intern (Business Social Media Analytics)',
    subtitle: 'January 2024 - May 2024',
    description: `This position was from the UMass Lowell RHSA Roads to Research program, and it allowed me to experience a more business oriented type of research. 
    I worked with a professor to collect and analyze data from twitter to see if we could predict a business's IPO date based on tweet activity. I used Python to 
    collect 500,000 tweets, filter and aggregated them for us to analyze.`,
    orientation: TimelineItemOrientation.LEFT,
    imgSrc: 'X_logo.svg'
  },
  {
    title: 'MIT Lincoln Laboratory Web Development Co-op',
    subtitle: 'February 2024 - June 2024',
    description: `This is my second corporate experience and my first time working in a government setting. This was a very interesting environment because 
    of the security and the type of work that was being done. I was part of the web development team and I was able to work on the internal website for the lab, and the external 
    conference websites that the lab would host. I used Drupal, HTML, CSS, and JavaScript to build and maintain these websites. I was also able to learn a lot about the 
    the company and what work a defense contractor company does.`,
    orientation: TimelineItemOrientation.RIGHT,
    imgSrc: 'Lincoln_Lab_icon.png',
    linkText: 'View MITLL website',
    linkHref: 'https://www.ll.mit.edu/'
  },
  {
    title: 'Athenahealth Software Engineering Intern',
    subtitle: 'June 2024 - August 2024',
    description: `This is my second internship at Athenahealth since I loved my first experience so much. This time I was placed is a different team working in a different 
    repository but was still on the same Care Collaboration division of the company. I utilized React and Nodejs to build features that would help internal care managers and care coordinators 
    work with their patients and their care.`,
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
