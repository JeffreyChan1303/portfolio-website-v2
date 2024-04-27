import React from 'react';
import { motion } from 'framer-motion';
import FeaturedWorkItem from './FeaturedWorkItem';

const featuredWorksArray: Array<{
  title: string;
  tags: Array<string>;
  imgSrc: string;
}> = [
  { title: 'Project Tracker', tags: ['React', 'Node.js', 'MongoDB'], imgSrc: '' },
  {
    title: 'Research Internship',
    tags: ['Python', 'Machine Learning'],
    imgSrc: ''
  },
  { title: 'Full-Stack Development', tags: ['React', 'Node.js', 'MongoDB'], imgSrc: '' },
  {
    title: 'Web Development Co-op',
    tags: ['React', 'Node.js', 'MongoDB'],
    imgSrc: ''
  }
];

const FeaturedWorks = () => {
  return (
    <motion.div id='featured-works'>
      <div className='featured-works-title'>Featured Work</div>
      <div className='featured-works-list'>
        {featuredWorksArray.map((work, index) => (
          <FeaturedWorkItem key={index} title={work.title} tags={work.tags} imgSrc={work.imgSrc} href='/' />
        ))}
      </div>
      <div className='featured-works-cta'> view all projects</div>
    </motion.div>
  );
};

export default FeaturedWorks;
