import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 border-b border-secondary pb-2">
              {t('siteTitle')}
            </h3>
            <p className="mb-4 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/premiumcatering" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/premiumcatering" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 border-b border-secondary pb-2">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  {t('services.service1.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  {t('services.service3.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  {t('services.service5.title')}
                </a>
              </li>
              <li>
                <a href="#additional" className="hover:text-secondary transition-colors">
                  {t('additional.title')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 border-b border-secondary pb-2">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="font-bold">Email:</p>
                <p>ksbcateringatoz@gmail.com</p>
              </li>
              <li>
                <p className="font-bold">{t('social.whatsapp')}:</p>
                <p>+91 9003474599</p>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:underline transition-colors">
                  {t('contact.title')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Premium Catering. {t('footer.rights')}
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary transition-colors">
              {t('footer.privacy')}
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-secondary transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>Made with <Heart size={12} className="inline text-red-500" /> for all food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;