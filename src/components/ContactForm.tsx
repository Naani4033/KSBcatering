import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Send, MessageSquare } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

type FormData = {
  name: string;
  email: string;
  phone: string;
  event: string;
  date: string;
  guests: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    // In a real application, you would send this data to your backend
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('contact.title')} />
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-primary-dark text-white p-8 md:w-1/3">
              <h3 className="text-xl font-bold mb-6">{t('social.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p>+91 9003474599</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>ksbcateringatoz@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">{t('social.subtitle')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:w-2/3">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
                  <p className="text-gray-600">{t('contact.success')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">{t('contact.name')}</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('name', { required: true })}
                      />
                      {errors.name && <span className="text-red-500 text-sm">Required</span>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">{t('contact.email')}</label>
                      <input
                        type="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      />
                      {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">{t('contact.phone')}</label>
                      <input
                        type="tel"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('phone', { required: true })}
                      />
                      {errors.phone && <span className="text-red-500 text-sm">Required</span>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">{t('contact.event')}</label>
                      <select
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.event ? 'border-red-500' : 'border-gray-300'
                        }`}
                        {...register('event', { required: true })}
                      >
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.event && <span className="text-red-500 text-sm">Required</span>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">{t('contact.date')}</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        {...register('date')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">{t('contact.guests')}</label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        {...register('guests')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">{t('contact.message')}</label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('message', { required: true })}
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm">Required</span>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    {t('contact.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;