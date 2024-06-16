import React from 'react';
import { motion } from 'framer-motion';
import HeroSocialLinks from './HeroSocialLinks';

// Variants for each letter
const titleLetterVariants = {
  hidden: {
    opacity: 0,
    y: 30, // Start position below the final position
    rotate: 5
  },
  visible: {
    opacity: 1,
    y: 0, // Final position
    rotate: 0,
    transition: {
      type: 'spring', // Type of animation
      damping: 16, // Spring damping
      stiffness: 200 // Spring stiffness
    }
  }
};
const subtitleLetterVariants = {
  hidden: {
    opacity: 0,
    y: 10, // Start position below the final position
    rotate: 5
  },
  visible: {
    opacity: 1,
    y: 0, // Final position
    rotate: 0,
    transition: {
      type: 'spring', // Type of animation
      damping: 16, // Spring damping
      stiffness: 200 // Spring stiffness
    }
  }
};

const Hero = () => {
  return (
    <section>
      <motion.div className='hero'>
        <div className='hero-wrapper'>
          <div className='hero-content'>
            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.06 // Delay between each child animation
                  }
                }
              }}
              initial='hidden'
              animate='visible'
              className='hero-title'
            >
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                S
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                o
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                f
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                t
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                w
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                a
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                r
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                &nbsp;
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                E
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                n
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                g
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                n
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                r
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                ,
              </motion.span>
            </motion.div>
            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.06, // Delay between each child animation
                    delayChildren: 0.2 // Delay the animations of children by 0.5 seconds
                  }
                }
              }}
              initial='hidden'
              animate='visible'
              className='hero-title'
            >
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                F
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                u
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                l
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                l
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                -
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                s
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                t
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                a
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                c
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                k
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                &nbsp;
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                D
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                v
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                l
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                o
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                p
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={titleLetterVariants} className='hero-letter-container'>
                r
              </motion.span>
            </motion.div>
            <motion.h3
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.06, // Delay between each child animation
                    delayChildren: 0.6 // Delay the animations of children by 0.5 seconds
                  }
                }
              }}
              initial='hidden'
              animate='visible'
              className='hero-subtitle'
            >
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                S
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                p
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                c
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                a
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                l
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                z
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                d
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                &nbsp;
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                n
              </motion.span>
            </motion.h3>
            <motion.h2
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.04, // Delay between each child animation
                    delayChildren: 0.6 // Delay the animations of children by 0.5 seconds
                  }
                }
              }}
              initial='hidden'
              animate='visible'
              className='hero-subtitle'
            >
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                B
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                u
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                l
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                d
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                n
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                g
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                &nbsp;
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                W
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                b
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                s
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                i
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                t
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                s
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                &nbsp;
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                &
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                &nbsp;
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                W
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                e
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                b
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                a
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                p
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                p
              </motion.span>
              <motion.span variants={subtitleLetterVariants} className='hero-letter-container'>
                s
              </motion.span>
            </motion.h2>

            {/* Hero social links component */}
            <HeroSocialLinks />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
