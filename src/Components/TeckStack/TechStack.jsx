import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';
const icons = [
  { name: 'HTML', rotation: 39.49, size: { width: 85.54, height: 79.95 } },
  { name: 'CSS', rotation: 164.32, size: { width: 109.99, height: 102.8 } },
  { name: 'Wave', rotation: 0, size: { width: 123, height: 162 } },
  { name: 'JS', rotation: 0, size: { width: 93, height: 85.81 } },
  { name: 'React', rotation: 60.27, size: { width: 91.59, height: 76.22 } },
  { name: 'Sass', rotation: 49.04, size: { width: 82.77, height: 63.45 } },
];

const TechStack = () => {
  return (
    <div className="tech-stack">
      {icons.map((icon, index) => (
        <motion.img
          key={index}
          src={`../../../assets/icons/${icon.name.toLowerCase()}.svg`}
          alt={icon.name}
          initial={{
            rotate: icon.rotation,
            width: icon.size.width,
            height: icon.size.height,
          }}
          animate={{
            rotate: 0,
            width: 'auto',
            height: 'auto',
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default TechStack;
