import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedWorkItemProps {
  title: string;
  tags: Array<string>;
  imgSrc: string;
  href: string;
}
const FeaturedWorkItem: React.FC<FeaturedWorkItemProps> = ({ title, tags, imgSrc, href }) => {
  return (
    <motion.a className='project-item' href={href}>
      <div className='project-item-main'>
        <img className='project-item-img' src={imgSrc} alt='featured work item image' />
      </div>
      <div className='project-item-footer'>
        <p className='project-item-tags'>{tags.join(' ◦ ')}</p>
        <h3 className='project-item-title'>{title}</h3>
      </div>
    </motion.a>
  );
};

export default FeaturedWorkItem;
