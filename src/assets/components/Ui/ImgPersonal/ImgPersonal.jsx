import '../ImgPersonal/ImgPersonal.css'
import FotoJuan from '../../../../assets/images/FotoJuan.jpeg'

export const ImgPersonal = ({estilos}) => {
    return (
      <>
          <img className='imgJuan' src={FotoJuan} alt="fotografia" />
      </>
    )
  }