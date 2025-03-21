import {Routes,Route} from 'react-router-dom'
import { Home } from "./components/Pages/Home/Home"
import { Container } from './components/Container/Container'
import { TechnicalSkills } from './components/Pages/TechnicalSkills/TechnicalSkills'
import { SocialSkills } from './components/Pages/SocialSkills/SocialSkills'
import { Studies } from './components/Pages/Studies/Studies'
import { Experience } from './components/Pages/Experience/Experience'

export const App = () => {
  return(
      
      <>
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicalSkills" element={<TechnicalSkills />} />
          <Route path="/socialSkills" element={<SocialSkills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>      
        </Container>
      </>
      
  )
}