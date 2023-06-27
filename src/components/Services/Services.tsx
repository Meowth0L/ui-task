import React from 'react';
import './style.css';

const options = [
  {
    icon: '/icons/search.svg',
    title: 'Search doctor',
    subtitle: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    icon: '/icons/pharmacy.svg',
    title: 'Online pharmacy',
    subtitle: 'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    icon: '/icons/consultation.svg',
    title: 'Consultation',
    subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: '/icons/detail.svg',
    title: 'Details info',
    subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: '/icons/care.svg',
    title: 'Emergency care',
    subtitle: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    icon: '/icons/tracking.svg',
    title: 'Tracking',
    subtitle: 'Track and save your medical history and health data ',
  },
];

export const Services: React.FC = () => {
  return (
    <div className="services-container">
      <div className="services-container__title-container">
        <h2 className="text-center">Our services</h2>
        <div className="services-container__divider" />
      </div>
      <h4 className="text-center">
        We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
        with our highly qualified doctors you can consult with us which type of service is suitable for your health
      </h4>
      <div className="services-container__grid">
        {options.map(option => (
          <div className="services-container__grid__item">
            <img src={option.icon} alt="" />
            <p>{option.title}</p>
            <p>{option.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
