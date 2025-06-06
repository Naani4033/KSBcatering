// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import { Star, Quote } from 'lucide-react';
// import SectionTitle from './common/SectionTitle';
// import { TestimonialProps } from '../types';

// const Testimonials: React.FC = () => {
//   const { t } = useTranslation();

//   const testimonials: TestimonialProps[] = [
//     {
//       name: 'Ramesh Kumar',
//       event: 'Daughter\'s Wedding',
//       testimonial: 'The food was amazing and guests are still talking about it. The team was professional, punctual, and made our special day even more memorable.',
//       image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     },
//     {
//       name: 'Priya Venkatesh',
//       event: 'Corporate Event',
//       testimonial: 'Exceptional service from start to finish. The menu customization was perfect for our diverse team, and the presentation was elegant.',
//       image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     },
//     {
//       name: 'Arun Subramanian',
//       event: 'House Warming',
//       testimonial: 'On-time delivery, delicious food, and excellent presentation. They took care of everything from setup to cleanup. Highly recommend!',
//       image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     }
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <section id="testimonials" className="py-20 bg-primary">
//       <div className="container mx-auto px-4">
//         <SectionTitle 
//           title={t('nav.testimonials')} 
//           light={true}
//         />
        
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index} 
//               className="bg-white rounded-lg shadow-lg p-6 relative"
//               variants={item}
//             >
//               <div className="absolute -top-6 left-6">
//                 <div className="bg-secondary p-3 rounded-full">
//                   <Quote size={24} className="text-primary" />
//                 </div>
//               </div>
              
//               <div className="mb-4 pt-6">
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={18} className="text-yellow-500 fill-current" />
//                   ))}
//                 </div>
//               </div>
              
//               <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
              
//               <div className="flex items-center">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name} 
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-600">{testimonial.event}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Types
interface TestimonialProps {
  name: string;
  event: string;
  testimonial: string;
  image: string;
}



// SectionTitle component
interface SectionTitleProps {
  title: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, light = false }) => {
  return (
    <div className="text-center mb-8">
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-primary-dark'}`}>
        {title}
      </h2>
    </div>
  );
};

// Main Testimonials component
const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  const testimonials: TestimonialProps[] = [
    {
      name: 'Ramesh Kumar',
      event: 'Daughter\'s Wedding',
      testimonial: 'The food was amazing and guests are still talking about it. The team was professional, punctual, and made our special day even more memorable.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Priya Venkatesh',
      event: 'Corporate Event',
      testimonial: 'Exceptional service from start to finish. The menu customization was perfect for our diverse team, and the presentation was elegant.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Arun Subramanian',
      event: 'House Warming',
      testimonial: 'On-time delivery, delicious food, and excellent presentation. They took care of everything from setup to cleanup. Highly recommend!',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('nav.testimonials')} 
          light={true}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 relative"
              variants={item}
            >
              <div className="absolute -top-6 left-6">
                <div className="bg-secondary p-3 rounded-full">
                  <Quote size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="mb-4 pt-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Export types and component
export type { TestimonialProps};
export { SectionTitle };
export default Testimonials;