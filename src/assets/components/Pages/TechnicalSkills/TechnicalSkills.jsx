import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx";
import { Footer } from "../../Layouts/Footer/Footer.jsx";
import { Header } from "../../Layouts/Header/Header.jsx";

export const TechnicalSkills = () => {
  return (
    <>
      <Header />

      <div className="container-technical-skills">
        <h2>Habilidades Técnicas</h2>

        <div className="container-technical">
          <h3>Frontend</h3>
          <div className="container-skills-list">
            <div className="skill-card">
              <img src="/images/jsx.png" alt="JSX" className="skill-image" />
              <span className="skill-name">JSX</span>
            </div>
            <div className="skill-card">
            <i class="fa-brands fa-html5"></i>
              <span className="skill-name">HTML</span>
            </div>
            <div className="skill-card">
              <img src="/images/css.png" alt="CSS" className="skill-image" />
              <span className="skill-name">CSS</span>
            </div>
            <div className="skill-card">
              <img src="/images/js.png" alt="JavaScript" className="skill-image" />
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-card">
              <img src="/images/bootstrap.png" alt="Bootstrap" className="skill-image" />
              <span className="skill-name">Bootstrap</span>
            </div>
            <div className="skill-card">
              <img src="/images/angular.png" alt="Angular" className="skill-image" />
              <span className="skill-name">Angular</span>
            </div>
          </div>
        </div>

        <div className="container-technical">
          <h3>Backend</h3>
          <div className="container-skills-list">
            <div className="skill-card">
              <img src="/images/nodejs.png" alt="Node.js" className="skill-image" />
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-card">
              <img src="/images/python.png" alt="Python" className="skill-image" />
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-card">
              <img src="/images/java.png" alt="Java" className="skill-image" />
              <span className="skill-name">Java</span>
            </div>
            <div className="skill-card">
              <img src="/images/django.png" alt="Django" className="skill-image" />
              <span className="skill-name">Django</span>
            </div>
            <div className="skill-card">
              <img src="/images/spring.png" alt="Spring Boot" className="skill-image" />
              <span className="skill-name">Spring Boot</span>
            </div>
          </div>
        </div>

        <div className="container-technical">
          <h3>Base de datos</h3>
          <div className="container-skills-list">
            <div className="skill-card">
              <img src="/images/sql.png" alt="SQL" className="skill-image" />
              <span className="skill-name">SQL</span>
            </div>
            <div className="skill-card">
              <img src="/images/postgresql.png" alt="PostgreSQL" className="skill-image" />
              <span className="skill-name">PostgreSQL</span>
            </div>
            <div className="skill-card">
              <img src="/images/mongodb.png" alt="MongoDB" className="skill-image" />
              <span className="skill-name">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};