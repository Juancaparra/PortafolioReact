import './ParagraphMain.css'

export const ParagraphMain = ({contenido, estilos}) => {
    return (
      <>
      <h3 className={estilos}>{contenido}</h3>
      <div className="containerParagraph">
          <p>Soy un programador apasionado y dedicado a desarrollar
             soluciones innovadoras que responden eficazmente a los 
             desafíos de cada proyecto. Mi enfoque está en la creación
             de código limpio, escalable y mantenible, siempre alineado
             con las mejores prácticas del desarrollo profesional. 
             Además, valoro la colaboración y la comunicación abierta, 
             creyendo firmemente que el trabajo en equipo potencia la 
             creatividad y garantiza resultados exitosos. A través de 
             compromiso y adaptabilidad, busco aportar calidad y valor 
             duradero en todo lo que hago.</p>
      </div>
      </>
    )
  }