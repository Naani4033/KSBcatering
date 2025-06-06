import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Globe, MessageCircle } from 'lucide-react';

// Types
interface SocialLinkProps {
  platform: string;
  icon: React.ReactNode;
  url: string;
}

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

interface ServiceProps {
  // Add service properties as needed
  [key: string]: any;
}

interface TestimonialProps {
  name: string;
  event: string;
  testimonial: string;
  image: string;
}

// SectionTitle component
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-8">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Main SocialConnect component
const SocialConnect: React.FC = () => {
  const { t } = useTranslation();
  
  const socialLinks: SocialLinkProps[] = [
    {
      platform: t('social.whatsapp'),
      icon: <MessageCircle size={24} />,
      url: 'https://wa.me/919876543210'
    },
    {
      platform: t('social.facebook'),
      icon: <Facebook size={24} />,
      url: 'https://facebook.com/premiumcatering'
    },
    {
      platform: t('social.instagram'),
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/premiumcatering'
    },
    {
      platform: t('social.google'),
      icon: <Globe size={24} />,
      url: 'https://g.page/premiumcatering'
    }
  ];

  return (
    <section className="py-20 bg-accent-dark">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('social.title')}
          subtitle={t('social.subtitle')} 
        />
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white flex items-center px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="bg-primary rounded-full p-2 mr-3 text-white">
                {social.icon}
              </div>
              <span className="font-medium text-primary-dark">
                {social.platform}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export types and component
export type { SocialLinkProps, GalleryImageProps, ServiceProps, TestimonialProps };
export { SectionTitle };
export default SocialConnect;