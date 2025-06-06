import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';

const EventTypes: React.FC = () => {
  const { t } = useTranslation();

  const events = t('events.items', { returnObjects: true }) as string[];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        // style={{
        //   backgroundImage: "url('https://images.pexels.com/photos/6211374/pexels-photo-6211374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center"
        // }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title={t('events.title')} 
          light={true}
        />
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <p className="text-lg font-medium">{event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;