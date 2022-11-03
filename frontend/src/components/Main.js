import { BsArrowRightShort } from "react-icons/bs";
import {Link} from "react-router-dom"

export default function Navigations(){
    const flecha = <BsArrowRightShort />
    return(
        <div className="texto-centro" id="main-principal">
            <h1>MyTinerary</h1>              
            <section className="subtitulo"> 
                <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            </section>
            <Link to="/cities" className="btn-home">Choose your destination <span className="icono-flecha">{flecha}</span></Link>
        </div>
    )
}

