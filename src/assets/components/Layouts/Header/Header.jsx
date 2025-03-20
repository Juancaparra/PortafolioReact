import { ImgPersonal } from "../../Ui/ImgPersonal/ImgPersonal"
import { NameHeader } from "../../Ui/NameHeader/NameHeader"
import  '../Header/Header.css'

export const Header = () =>  {
    return(
        <div className="Header">
        <ImgPersonal/>
        <NameHeader/>
        </div>
    )
}