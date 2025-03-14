import { ImgHeader } from "../../Ui/ImgHeader/ImgHeader"
import { NameHeader } from "../../Ui/NameHeader/NameHeader"
import  '../Header/Header.css'

export const Header = () =>  {
    return(
        <div className="Header">
        <ImgHeader/>
        <NameHeader/>
        </div>
    )
}