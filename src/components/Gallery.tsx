// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import SectionTitle from './common/SectionTitle';
// import { GalleryImageProps } from '../types';

// const Gallery: React.FC = () => {
//   const { t } = useTranslation();
//   const [activeCategory, setActiveCategory] = useState('all');

//   const galleryImages: GalleryImageProps[] = [
//     {
//       src: 'https://images.pexels.com/photos/5710192/pexels-photo-5710192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       alt: 'Wedding banquet setup',
//       category: 'wedding'
//     },
//     {
//       src: 'https://images.pexels.com/photos/5709017/pexels-photo-5709017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       alt: 'Traditional South Indian dishes',
//       category: 'food'
//     },
//     {
//       src: 'https://images.pexels.com/photos/5779666/pexels-photo-5779666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       alt: 'Corporate event catering',
//       category: 'corporate'
//     },
//     {
//       src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       alt: 'Wedding ceremony decoration',
//       category: 'wedding'
//     },
//     {
//       src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       alt: 'Traditional dessert platter',
//       category: 'food'
//     },
//     {
//       src: 'https://images.pexels.com/photos/7937489/pexels-photo-7937489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       alt: 'Family celebration setup',
//       category: 'event'
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All' },
//     { id: 'wedding', name: 'Weddings' },
//     { id: 'food', name: 'Food' },
//     { id: 'corporate', name: 'Corporate' },
//     { id: 'event', name: 'Events' }
//   ];

//   const filteredImages = activeCategory === 'all' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === activeCategory);

//   return (
//     <section id="gallery" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <SectionTitle title={t('nav.gallery')} />
        
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               className={`px-4 py-2 rounded-full transition-colors ${
//                 activeCategory === category.id
//                   ? 'bg-primary text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//               onClick={() => setActiveCategory(category.id)}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
        
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           layout
//         >
//           {filteredImages.map((image, index) => (
//             <motion.div
//               key={index}
//               className="overflow-hidden rounded-lg shadow-md h-64 relative"
//               layout
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.4 }}
//               whileHover={{ scale: 1.03 }}
//             >
//               <img 
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                 <p className="text-white font-medium">{image.alt}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Types defined in the same file
interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

// SectionTitle component inline
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      {title}
    </h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
  </div>
);

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages: GalleryImageProps[] = [
   
    
     {
      src: '/public/meals.jpg',
      alt: 'Wedding banquet setup',
      category: 'wedding'
    },  {
      src: '/public/idliu.jpg',
      alt: 'Wedding banquet setup',
      category: 'wedding'
    }
    , {
      src: '/public/chicken1.jpg',
      alt: 'Wedding banquet setup',
      category: 'wedding'
    }, {
      src: '/public/leaffqw.png',
      alt: 'Wedding banquet setup',
      category: 'wedding'
    },  {
      src: '/public/briyani.jpg',
      alt: 'Wedding banquet setup',
      category: 'wedding'
    },{
      src: '/public/chicken1.jpg',
      alt: 'Wedding banquet setup',
      category: 'wedding'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'food', name: 'Food' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'event', name: 'Events' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('nav.gallery')} />
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.category}-${index}`}
              className="overflow-hidden rounded-lg shadow-md h-64 relative"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
export type { GalleryImageProps };