import Logo from "../assets/logo-blanco.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <div className="footer">
            <div className="contacto-footer">
                <div className="logo-footer">
                    <img alt="logo-footer" src= {Logo} className="logofooter" />
                </div>
                <nav className="nav-2">
                    <Link to="/" className="nav2">Home</Link>
                    <Link to="/cities" className="nav2">Cities</Link>
                    <Link to="/signin" className="nav2">Sign in</Link>
                    <Link to="/signup" className="nav2">Sing up</Link>
                </nav>
                <div className="contacto">
                    <p className="direccion">100-108 W Centre St, Baltimore, MD 21201, EE.UU.</p>
                    <p className="mail" >info@mytinerary.com</p>
                    <p className="telefono">+44 20 3500 0202</p>
                </div>
                <div className="social-icons">
                    <MdOutlineFacebook className="social-icons2" />
                    <AiFillInstagram className="social-icons2" />
                    <AiFillTwitterCircle className="social-icons2" />
                    <RiWhatsappFill className="social-icons2" />
                </div>
            </div>
        </div>
    )
}