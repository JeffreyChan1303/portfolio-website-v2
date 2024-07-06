import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false); // Close the menu if click is outside
        }
      }
      console.log(event);
    };

    // Step 2: Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Step 3: Remove the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]); // Dependency array ensures effect runs only once

  useEffect(() => {
    // Function to prevent default behavior
    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    if (isMenuOpen) {
      // Disable scrolling
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      // Re-enable scrolling
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    }

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isMenuOpen]); // Effect runs when isMenuOpen changes

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6
      }}
      className='header'
    >
      <nav className='nav'>
        {viewWidth < 480 ? (
          <motion.a whileHover={{ scale: 1.05 }} className='logo' href='#'>
            JC
          </motion.a>
        ) : (
          <motion.a whileHover={{ scale: 1.05 }} className='logo' href='#'>
            Jeffrey Chan
          </motion.a>
        )}
        {/* <div ref={hamburgerRef} className={`hamburger-menu ${isMenuOpen && 'menu-open'}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div> */}
        <div className='nav-button-wrapper'>
          <motion.a whileHover={{ scale: 1.05 }} className='nav-button' href='#experience'>
            My Journey
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} className='nav-button' href='#works'>
            Featured Works
          </motion.a>
        </div>
      </nav>
      {/* <div className={`nav-modal ${isMenuOpen ? 'menu-open' : ''}`}>
        <div ref={menuRef} className='right-menu'>
          <motion.a className='nav-button' href='#experience'>
            My Journey
          </motion.a>
          <motion.a className='nav-button' href='#works'>
            Featured Works
          </motion.a>
          <motion.a className='nav-button' href='#footer'>
            Contact Me
          </motion.a>
        </div>
        <div className={`right-menu-background ${isMenuOpen ? 'menu-open' : ''}`}></div>
      </div> */}
    </motion.div>
  );
};

export default Header;
