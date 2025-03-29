import React from 'react';
import { Header } from '../../Layouts/Header/Header.jsx';
import { Footer } from '../../Layouts/Footer/Footer.jsx';
import sena from '../../../assets/images/sena.jpg'
import veterinaria from '../../../assets/images/veterinaria.jpg'
import pizzeria from '../../../assets/images/pizzeria.png'
import './Experience.css';

export const Experience = () => {
  return (
    <>
      <Header />

      <div className="container-experience">
        <h2 className="titleExperience">Mis Experiencias Laborales</h2>

        <div className="container-experience-list">
          <div className="experience-card">
            <img className='imgStudies' src={pizzeria} alt="" />
            <span className="experience-name">Pizzería</span>
            <span className="experience-description">Atención al cliente y preparación de alimentos</span>
          </div>

          <div className="experience-card">
          <img className='imgStudies' src={veterinaria} alt="" />
            <span className="experience-name">Veterinaria</span>
            <span className="experience-description">Asistente en cuidado de animales</span>
          </div>

          <div className="experience-card">
            <img className='imgStudies' src={sena} alt="" />
            <span className="experience-name">SENA</span>
            <span className="experience-description">Asistente en desarrollo de software</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};