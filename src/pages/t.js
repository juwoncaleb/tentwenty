import { useState, useEffect } from 'react';

const Parallax = () => {
  const [scrollPos, setScrollPos] = useState(0);

  // Update the scroll position state variable on scroll
  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='parallax-container'>
      <div
        className='parallax-bg'
        style={{ transform: `translateY(-${scrollPos * 0.5}px)` }}
      />
      <div
        className='parallax-content'
        style={{ transform: `translateY(${scrollPos * 0.5}px)` }}
      >
        <h1>Parallax Effect</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          ultrices sapien augue, sit amet maximus sapien luctus at. Nam
          lacinia, elit vel euismod consectetur, elit ante maximus nisl, ac
          euismod justo ex in arcu.
        </p>
      </div>
    </div>
  );
};

export default Parallax
