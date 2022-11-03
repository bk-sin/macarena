import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { useRef} from "react"
import countries from './Countries'
import GoogleLogin from 'react-google-login'
import {Link, useNavigate} from'react-router-dom'


function SignUp (props) {
    let navigate = useNavigate()
    localStorage.getItem("token") && !props.token && props.signToken()
    props.token && navigate("/", {replace: true})
    const responseGoogle = (res) => {
        let googleUser ={
            name: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            photo: res.profileObj.imageUrl,
            country: "Argentina",
            google: true
        }
        props.postUser(googleUser)
    }
    const name = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const photo = useRef()
    const country = useRef()
    
    function handleSignUp(e){
        e.preventDefault()
        props.postUser({
            name: name.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            photo: photo.current.value,
            country: country.current.value
        })
        name.current.value = ""
        lastName.current.value = ""
        email.current.value = ""
        password.current.value = ""
        photo.current.value = ""
        country.current.value = ""
    }

    return(
        <div className='contenedor-formu'>
            <div className="cont-formulario">
                <h2 className='titulo-sup'>Create an account</h2>
                <form className="formulario" onSubmit={handleSignUp}>
                    <div className="inputs">
                        <input type="text" ref={name} required minLength="3" maxLength="25" className="input" name="name" placeholder="Name"/>
                        <input type="text" ref={lastName} className="input" name="lastName"  required maxLength="25" placeholder="Last Name" />
                        <input type="text" ref={email} className="input" name="email" required placeholder="Email"/>
                        <input type="password" ref={password} className="input" name="password" required minLength="8" maxLength="20" placeholder="Password"/>
                        <input type="text" ref={photo} className="input" name="photo" required placeholder="URL de la foto"/>
                        <select ref={country} className="input">
                            {countries.sort().map(country =>{
                                return(
                                    <option key={country} value="country" className='color-pais'>{country}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='submit'>
                        <input type="submit" value="Submit" className='btn-submit' />
                    </div>
                    <div className='btn-google'>
                        <GoogleLogin
                            clientId="113911854537-8j68k30a4qpl884ffcvk7hvdfmsdlfnc.apps.googleusercontent.com"
                            buttonText="Sign Up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </form>
                <div className='btn-cont-sign'>
                    <p className='texto-sign'>Do you already have an account?</p>
                    <Link to="/signin" className='btn-sign'>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    postUser: authActions.postUser,
    signToken: authActions.signToken
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)