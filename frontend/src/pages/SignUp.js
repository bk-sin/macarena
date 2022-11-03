import React, {Component} from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SignUpComponent from '../components/SignUpComponent'

class SignUp extends Component  {
    render(){
        return (
            <div>
                <div className="back-img">
                    <Navigation />
                    <div className="mainSignUp">
                        <SignUpComponent />
                    </div>
                </div>
                <Footer />
                <p className="copyright">©MyTinerary | Proyect2021</p>
            </div>
        )
    }
}

export default SignUp