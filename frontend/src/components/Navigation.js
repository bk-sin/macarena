import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import logo2 from "../assets/logo-2.png"
import { BiUserCircle } from "react-icons/bi"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions"

function Navigations(props) {
    localStorage.getItem("token") && !props.token && props.signToken()
    const userIcon = <BiUserCircle />
    return (
        <>
            <Navbar collapseOnSelect className='nav' expand='lg'>
            <Container>
                <Navbar.Brand href="/" className="titulo-logo">
                    <img alt="logo" src={logo2} className="logo2" />
                    <h2 className="titulo">MyTinerary</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
                    <Nav className="navHome">
                            <Link to='/' className='color-font'>Home</Link>
                            <Link to='/cities' className='color-font'>Cities</Link>
                            {!props.token ? (
                                <NavDropdown title= {userIcon} className="iconn" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} className="usuario" to="/signin">Sign in</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} className="usuario" to="/signup">Sign up</NavDropdown.Item>
                                </NavDropdown> 
                            ):(
                                <>
                                    <NavDropdown
                                        className="cont-nav-img"
                                        title={
                                            <img
                                            src={
                                                props.user.photo
                                                ? props.user.photo
                                                : "../assets/usericon.svg"
                                            }
                                            className="nav-img"
                                            alt="user_photo"
                                            />
                                        }
                                        id="basic-nav-dropdown"
                                    >
                                    <NavDropdown.Item as={Link} to="/" onClick={() => {props.signOut()}} className="usuario">
                                        Sign out
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                </> 
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </>
        )
    } 

const mapDispatchToProps = {
    signToken: authActions.signToken,
    signOut: authActions.signOut,
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
        token: state.authReducer.token,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigations)