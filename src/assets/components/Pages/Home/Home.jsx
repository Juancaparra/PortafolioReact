import { Footer } from "../../Layouts/Footer/Footer.jsx"
import { Header } from "../../Layouts/Header/Header.jsx"
import { SectionAboutMe } from "../../Layouts/SectionAboutMe/SectionAboutMe.jsx"
import { SectionMenu } from "../../Layouts/SectionMenu/SectionMenu.jsx"

export const Home = () => {
  return (
    <>
        <Header/>
        <SectionAboutMe/>
        <SectionMenu/>
        <Footer/>
    </>
  )
}