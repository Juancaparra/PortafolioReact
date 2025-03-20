import { BtnSection } from "../../Ui/BtnSection/BtnSection.jsx"
import '../SectionMenu/SectionMenu.css'

export const SectionMenu = () => {
  return (
    <>
    <div className="container-btns">
      <BtnSection  estilos="btn-section" contenido={"Habilidades Técnicas"} to="/technicalSkills" />
      <BtnSection estilos="btn-section" contenido={"Habilidades Sociales"} to={"/socialSkills"} />
      <BtnSection estilos="btn-section" contenido={"Experiencia Profesional"} to={"/experience"}/>
      <BtnSection estilos="btn-section" contenido={"Estudios"} to={"studies"}/>
    </div>
    
    </>
  )
}