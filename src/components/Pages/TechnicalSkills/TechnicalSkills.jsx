import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx";
import { Footer } from "../../Layouts/Footer/Footer.jsx";
import { Header } from "../../Layouts/Header/Header.jsx";
import './TechnicalSkills.css';

export const TechnicalSkills = () => {
  return (
    <>
      <Header />

      <div className="container-technical-skills">
        <h2>Habilidades Técnicas</h2>

        <div className="container-technical">
          <h3 className="technicalSkillsTitle">Frontend</h3>
          <div className="container-skills-list">
            <div className="skill-card">
            <i class="fa-brands fa-react skill-icon"></i>
              <span className="skill-name">JSX</span>
            </div>
            <div className="skill-card">
            <i class="fa-brands fa-html5 skill-icon"></i>
              <span className="skill-name">HTML</span>
            </div>
            <div className="skill-card">
            <i class="fa-brands fa-css3-alt skill-icon"></i>
              <span className="skill-name">CSS</span>
            </div>
            <div className="skill-card">
            <i class="fa-brands fa-js skill-icon"></i>
              <span className="skill-name">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="container-technical">
          <h3 className="technicalSkillsTitle">Backend</h3>
          <div className="container-skills-list">
            <div className="skill-card">
            <i class="fa-brands fa-node-js skill-icon"></i>
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-card">
            <i class="fa-brands fa-java skill-icon"></i>
              <span className="skill-name">Java</span>
            </div>
          </div>
        </div>

        <div className="container-technical">
          <h3 className="technicalSkillsTitle">Base de datos</h3>
          <div className="container-skills-list">
            <div className="skill-card">
            <i class="bi bi-filetype-sql skill-icon"></i>
              <span className="skill-name">SQL</span>
            </div>
            <div className="skill-card">
            <i class='bx bxl-mongodb skill-icon' ></i>
              <span className="skill-name">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}; 