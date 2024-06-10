import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FeaturedWorkItem from './FeaturedWorkItem';

const featuredWorksArray: Array<{
  title: string;
  tags: Array<string>;
  imgSrc: string;
  link: string;
}> = [
  {
    title: 'Project Tracker',
    tags: ['React', 'Node.js', 'MongoDB'],
    imgSrc: 'trackMyProjectsDashboard.png',
    link: 'https://www.trackmyprojects.org'
  },
  {
    title: 'Network Security Research',
    tags: ['Python', 'matplotlib', 'pandas'],
    imgSrc: 'network_security_img.png',
    link: 'https://submit.petsymposium.org/2024.1/paper/54?cap=hcav54svgRTisvnBsTLSowtQwwTayc'
  },
  {
    title: 'Research Data Collection Tool',
    tags: ['Angular', 'Node.js', 'MySql'],
    imgSrc: 'medtask_img.png',
    link: '/'
  },
  {
    title: 'MITLL DTS Conference Website',
    tags: ['Druple', 'HTML', 'CSS', 'JavaScript'],
    imgSrc: 'DTS_img.png',
    link: 'https://www.ll.mit.edu/conferences-events/2025/03/defense-technology-seminar-dts-military-officers-2025'
  }
];

// Variants for each letter
const titleLetterVariants = {
  hidden: {
    opacity: 0,
    y: 30 // Start position below the final position
  },
  visible: {
    opacity: 1,
    y: 0 // Final position
  }
};

const FeaturedWorks = () => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  return (
    <section id='works'>
      <div ref={inViewRef} id='featured-works'>
        <motion.div
          className='featured-works-title'
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06, // Delay between each child animation
                delayChildren: 0.2
              }
            }
          }}
          initial='hidden'
          animate={isInView && 'visible'}
        >
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            F
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            e
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            a
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            t
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            u
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            r
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            e
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            d
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            &nbsp;
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            W
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            o
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            r
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            k
          </motion.span>
          <motion.span variants={titleLetterVariants} className='featured-works-title-letter'>
            s
          </motion.span>
        </motion.div>
        <div className='featured-works-list'>
          {featuredWorksArray.map((work, index) => (
            <FeaturedWorkItem key={index} title={work.title} tags={work.tags} imgSrc={work.imgSrc} href={work.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
