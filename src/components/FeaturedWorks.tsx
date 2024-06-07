import React from 'react';
import { motion } from 'framer-motion';
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

const FeaturedWorks = () => {
  return (
    <section id='works'>
      <motion.div id='featured-works'>
        <div className='featured-works-title'>Featured Works</div>
        <div className='featured-works-list'>
          {featuredWorksArray.map((work, index) => (
            <FeaturedWorkItem key={index} title={work.title} tags={work.tags} imgSrc={work.imgSrc} href={work.link} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedWorks;
