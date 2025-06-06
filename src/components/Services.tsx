import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Utensils, Truck, Calendar, ChefHat, FileText, Soup } from 'lucide-react';
import ServiceCard from './ServiceCard';
import SectionTitle from './common/SectionTitle';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Utensils size={32} />,
      title: t('services.service1.title'),
      description: t('services.service1.description')
    },
    {
      icon: <Truck size={32} />,
      title: t('services.service2.title'),
      description: t('services.service2.description')
    },
    {
      icon: <Calendar size={32} />,
      title: t('services.service3.title'),
      description: t('services.service3.description')
    },
    {
      icon: <ChefHat size={32} />,
      title: t('services.service4.title'),
      description: t('services.service4.description')
    },
    {
      icon: <FileText size={32} />,
      title: t('services.service5.title'),
      description: t('services.service5.description')
    },
    {
      icon: <Soup size={32} />,
      title: t('services.service6.title'),
      description: t('services.service6.description')
    }
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
    <section id="services" className="py-20 bg-accent-dark">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;