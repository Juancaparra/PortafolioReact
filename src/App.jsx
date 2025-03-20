import {Routes,Route} from 'react-router-dom'
import { Home } from "./assets/components/Pages/Home/Home"
import { Container } from './assets/components/Container/Container'
import { TechnicalSkills } from './assets/components/Pages/TechnicalSkills/TechnicalSkills'
import { SocialSkills } from './assets/components/Pages/SocialSkills/SocialSkills'
import { Studies } from './assets/components/Pages/Studies/Studies'

export const App = () => {
  return(
      
      <>
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicalSkills" element={<TechnicalSkills />} />
          <Route path="/socialSkills" element={<SocialSkills />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>      
        </Container>
      </>
      
  )
}