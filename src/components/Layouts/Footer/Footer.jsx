import { BtnSection } from "../../Ui/BtnSection/BtnSection.jsx"
import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx"
import './Footer.css'


export const Footer = () => {
  return (

      <>
          <div className="footer">

              
              <p>Puedes comunicarte conmigo atravez de: </p>

              <div className="icons-footer">
                  <ItemLista>
                    <a href="tel:+573006018981">
                      <i class="LinksPersonal">Whatsapp</i>
                    </a>
                  </ItemLista>

                  <ItemLista>
                    <a href="mailto:parraospinajuancamilo@gmail.com">
                      <i class="LinksPersonal">Gmail</i>
                    </a>
                  </ItemLista>

                  <ItemLista>
                    <a href="https://github.com/Juancaparra">
                      <i class='LinksPersonal' > Git hub</i>
                    </a>
                  </ItemLista>
              </div>

              <p>©2025 Portfolio. Todos los derechos reservados</p>

              
          </div>
      </>
    
    
  )
}