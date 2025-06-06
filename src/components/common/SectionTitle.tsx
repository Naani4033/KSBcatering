import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${light ? 'text-accent' : 'text-primary'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-lg ${light ? 'text-accent-light' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      
      <div className="mt-4 flex justify-center">
        <div className={`w-24 h-1 rounded ${light ? 'bg-secondary' : 'bg-secondary'}`}></div>
      </div>
    </motion.div>
  );
};

export default SectionTitle;