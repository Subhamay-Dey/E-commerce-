import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BulletFollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const tween = {
    type: 'tween',
    duration: 0.2,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={tween}
      style={{
        position: 'fixed',
        width: '10px',
        height: '10px',
        backgroundColor: 'black',
        borderRadius: '50%',
      }}
    />
  );
};

export default BulletFollowCursor;
