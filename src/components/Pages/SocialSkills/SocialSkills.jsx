import React from 'react';
import { Header } from '../../Layouts/Header/Header.jsx';
import { Footer } from '../../Layouts/Footer/Footer.jsx';
import './SocialSkills.css';

export const SocialSkills = () => {
  return (
    <>
      <Header />

      <div className="container-social-skills">
        <h2 className="title-social-skills">Habilidades Sociales</h2>

        <div className="container-social-list">
          <div className="social-card">
            <span className="social-name">Respeto</span>
          </div>
          <div className="social-card">
            <span className="social-name">Amabilidad</span>
          </div>
          <div className="social-card">
            <span className="social-name">Honestidad</span>
          </div>
          <div className="social-card">
            <span className="social-name">Cooperador</span>
          </div>
          <div className="social-card">
            <span className="social-name">Trabajo en Equipo</span>
          </div>
          <div className="social-card">
            <span className="social-name">Empatía</span>
          </div>
          <div className="social-card">
            <span className="social-name">Escucha Activa</span>
          </div>
          <div className="social-card">
            <span className="social-name">Humildad</span>
          </div>
          <div className="social-card">
            <span className="social-name">Adaptabilidad</span>
          </div>
        </div>

        <div className="container-level-english">
          <div className="social-card">
            <span className="social-name">Nivel de Inglés: A2</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};