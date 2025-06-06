import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, Calendar, Users, Package, Coffee, Award, Truck } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const UniqueFeatures: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Home size={24} />,
      title: t('unique.point1.title'),
      description: t('unique.point1.description')
    },
    {
      icon: <Calendar size={24} />,
      title: t('unique.point2.title'),
      description: t('unique.point2.description')
    },
    {
      icon: <Users size={24} />,
      title: t('unique.point3.title'),
      description: t('unique.point3.description')
    },
    {
      icon: <Package size={24} />,
      title: t('unique.point4.title'),
      description: t('unique.point4.description')
    },
    {
      icon: <Coffee size={24} />,
      title: t('unique.point5.title'),
      description: t('unique.point5.description')
    },
    {
      icon: <Award size={24} />,
      title: t('unique.point6.title'),
      description: t('unique.point6.description')
    },
    {
      icon: <Truck size={24} />,
      title: t('unique.point7.title'),
      description: t('unique.point7.description')
    }
  ];

  return (
    <section className="py-20  bg-accent-dark">
      <div className="container mx-auto px-4  text-yellow-200">
        <SectionTitle title={t('unique.title')} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/40 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4 text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold  text-white flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className=" text-white flex-shrink-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;