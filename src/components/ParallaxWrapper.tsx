import React from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const ParallaxWrapper: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, (value) => value * 300);
  const pathRef = React.useRef<SVGPathElement>(null);

  useMotionValueEvent(scrollYProgress, 'change', (scrollYPercent) => {
    const pathElement = pathRef.current;
    const length = pathElement?.getTotalLength();
    if (pathElement && length) {
      pathElement.style.strokeDasharray = length.toString();
      pathElement.style.strokeDashoffset = (length * (0.9 - scrollYPercent)).toString();
    }
  });

  return (
    <motion.div className='parallax-wrapper'>
      {/* the squiggle */}
      <motion.svg
        style={{ y, transitionDuration: '3' }}
        initial={{ opacity: 0, filter: 'blur(100px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        className='squiggle'
        width='1000'
        height='2500'
        viewBox='0 0 1000 2500'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          ref={pathRef}
          d='M0 0C57.2019 143.828 199.514 404.068 311.148 294.403C388.822 218.099 271.859 142.141 531.526 94.7609C739.259 56.8566 792.095 224.022 705.389 337.643C663.265 392.844 460.535 398.18 480.044 483.925C504.43 591.106 698.616 566.726 720.292 663.787C741.969 760.848 606.732 764.965 651.65 955.429C690.487 1120.11 764.097 1162.74 903.639 1137.59C1028.73 1115.05 1048.15 856.855 864.802 915.409C445.362 1049.36 462.583 1231.89 494.495 1305.03C510.753 1350.73 560.97 1470.08 631.78 1581.96C720.292 1721.8 835.448 1940.76 651.65 2066.8C467.851 2192.84 509.849 1857.5 302.116 1807.36C94.3831 1757.22 67.2875 1920.52 129.156 2066.8C191.024 2213.08 495.398 2137.18 398.757 2250.8C321.444 2341.7 569.5 2371.21 473.5 2500'
          stroke='#EE7272'
        />
      </motion.svg>
    </motion.div>
  );
};

export default ParallaxWrapper;
