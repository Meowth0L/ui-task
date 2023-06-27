import React from 'react';
import './style.css';

export const Overview: React.FC = () => {
  return (
    <div className="overview-container">
      <div className="overview-container__header">
        <h1>Virtual healthcare for you</h1>
        <h3>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h3>
        <button className="overview-container__header__button">Consult today</button>
      </div>
      <img src="trafalgar-header illustration.png" alt="trafalgar-header illustration" />
    </div>
  );
};
