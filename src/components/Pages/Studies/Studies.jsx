import React from 'react';
import { Header } from '../../Layouts/Header/Header.jsx';
import { Footer } from "../../Layouts/Footer/Footer.jsx";
import colegio from '../../../assets/images/colegio.jpg'
import sena from '../../../assets/images/sena.jpg'
import './Studies.css';

export const Studies = () => {
  return (
    <>
      <Header />

      <div className="container-studies">
        <h2 className='titleStudies'>Mis Estudios</h2>

        <div className="container-studies-list">
          <div className="study-card">
            <img className='imgStudies' src={colegio} alt="" />
            <span className="study-name">Colegio: Institución Educativa Santa María Goretti</span>
            <span className="study-description">Bachiller Académico</span>
          </div>

          <div className="study-card">
          <img className='imgStudies' src={sena} alt="" />
            <span className="study-name">SENA</span>
            <span className="study-description">Técnico en Desarrollo de Software</span>
          </div>

          <div className="study-card">
          <img className='imgStudies' src={sena} alt="" />
            <span className="study-name">SENA</span>
            <span className="study-description">Tecnologo en Análisis y desarrolo de Software</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};