// import React from 'react';
// import { motion } from 'framer-motion';
// import { ServiceProps } from "../types/service";

// const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white/95 rounded-lg p-6 shadow-md border-l-4 border-secondary flex flex-col items-center text-center h-full"
//     >
//       <div className="text-primary mb-4 p-3 rounded-full bg-accent/50">
//         {icon}
//       </div>
//       <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">
//         {title}
//       </h3>
//       <p className="text-gray-700">
//         {description}
//       </p>
//     </motion.div>
//   );
// };

// export default ServiceCard;


import React, { useState } from 'react';

// Types
export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ServiceCard Component
const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500 flex flex-col items-center text-center h-full transition-all duration-300 transform ${
        isHovered ? '-translate-y-1 shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-blue-600 mb-4 p-3 rounded-full bg-green-200">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
