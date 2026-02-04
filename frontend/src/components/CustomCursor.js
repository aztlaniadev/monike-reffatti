import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkHoverTarget = (element) => {
      if (!element) return false;
      
      if (element.tagName === 'A' || 
          element.tagName === 'BUTTON' ||
          element.getAttribute('role') === 'button') {
        return true;
      }
      
      if (element.parentElement) {
        return checkHoverTarget(element.parentElement);
      }
      
      return false;
    };

    const handleMouseOver = (e) => {
      const shouldHover = checkHoverTarget(e.target);
      setIsHovering(shouldHover);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;
