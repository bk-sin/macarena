import React, {Component} from 'react'
import Navigation from '../components/Navigation'
import CardCities from '../components/CardCities'
import Footer from '../components/Footer'

class Cities extends Component  {
    render(){
        return (
            <div>
                <div className="back-ciudades">
                    <Navigation />
                    <div className="cont-titulo1 container">
                        <h1 className="titulo-ciudades">Cities</h1>
                    </div>
                </div>
                <CardCities /> 
                <Footer />
                <p className="copyright">©MyTinerary | Proyect2021</p>
            </div>
        )
    }
}

export default Cities