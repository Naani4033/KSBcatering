import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// import { Music, Gift, Camera, ChairDirector, Baby, Candy, Languages } from 'lucide-react';
import { Music, Gift, Camera, Armchair, Baby, Candy, Languages } from 'lucide-react';

import SectionTitle from './common/SectionTitle';

const AdditionalServices: React.FC = () => {
  const { t } = useTranslation();

  const additionalServices = [
    {
      icon: <Music size={32} className="text-primary" />,
      title: t('additional.dj'),
    },
    {
      icon: <Gift size={32} className="text-primary" />,
      title: t('additional.gifts'),
    },
    {
      icon: <Camera size={32} className="text-primary" />,
      title: t('additional.photo'),
    },
    {
      icon: <Armchair size={32} className="text-primary" />,
      title: t('additional.furniture'),
    },
    {
      icon: <Baby size={32} className="text-primary" />,
      title: t('additional.kids'),
    },
    {
      icon: <Candy size={32} className="text-primary" />,
      title: t('additional.snacks'),
    },
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-accent-dark relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={t('additional.title')} />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md flex items-center"
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="mr-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServices;