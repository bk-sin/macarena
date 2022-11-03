import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CardCity from '../components/CardCity'
import Footer from '../components/Footer'

class City extends Component  {
    render(){
        return (
            <div>
                    <CardCity />
                <div className="main">
                    <div className="btns-volver">
                        <Link to="/cities" className="btn-volver">Go back to Cities</Link>
                        <Link to="/" className="btn-volver">Go back to Home</Link>
                    </div>
                </div>
                <div>
                    <Footer />
                    <p className="copyright">©MyTinerary | Proyect2021</p>
                </div>
            </div>
        )
}
}

export default City