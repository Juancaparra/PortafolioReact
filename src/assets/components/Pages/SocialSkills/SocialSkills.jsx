import React from 'react'
import { Header } from '../../Layouts/Header/Header.jsx'
import { ItemLista } from '../../Ui/ItemLista/ItemLista.jsx'
import { Footer } from '../../Layouts/Footer/Footer.jsx'

export const SocialSkills = () => {
  return (

    <>
          <Header/>

          <div className='container-social-skills'>
              <h2>Habilidades sociales</h2>

              <div className='container-social-list'>
                  <div className='item-social'>
                      <ItemLista contenido={"Respeto"} />
                  </div>

                  <div className='item-social2'>
                      <ItemLista contenido={"Amabilidad"} />
                  </div>

                  <div className='item-social3'>
                      <ItemLista contenido={"Honestidad"} />
                  </div>

                  <div className='item-social4'>
                      <ItemLista contenido={"Cooperador"} />
                  </div>

                  <div className='item-social5'>
                      <ItemLista contenido={"Trabajo en Equipo"} />
                  </div>

                  <div className='item-social6'>
                      <ItemLista contenido={"Empatía"} />
                  </div>

                  <div className='item-social7'>
                      <ItemLista contenido={"Escucha Activa"} />
                  </div>

                  <div className='item-social8'>
                      <ItemLista contenido={"Humildad"} />
                  </div>

                  <div className='item-social9'>
                      <ItemLista contenido={"Adaptabilidad"} />
                  </div>

              </div>

              <div className='container-level-english'>
                  <ItemLista contenido={"Nivel de inglés "}>
                      <span className='level'>A2 </span>
                      <i class="bi bi-translate"></i>
                  </ItemLista>
              </div>
          </div>

          <Footer/>

    </>
    
      
    
  )
}