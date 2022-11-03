import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import {connect} from 'react-redux'
import Itinerary from './Itinerary'
import {useEffect} from "react"
import {Spinner} from "react-bootstrap"
import useConstructor from '../utilities/useConstructor'

function CardCity (props){
    const params = useParams()
    useConstructor(() => {
        props.setLoad()
    })
    useEffect(() => {
        props.getCity(params.id)
        props.getItineraries(params.id)
    }, [])
    
    const backgroundCity = {
        backgroundImage: "url(" + props.city.src + ")"
    }

    return(
        <div>
            <div className="hero-city"  key={props.city._id} style={backgroundCity}>
                <Navigation  />
            </div>
            <div className="cont-titulo">
                <h3 className="titulito">{props.city.name}</h3>
            </div>
            <div className="cont-texto container">
                <p className="texto-city">{props.city.description}</p>
            </div>

            {props.city ? (
                    props.itineraries.length > 0 
                    ? (props.itineraries.map((itinerary, index)=>
                    <Itinerary key={index} itinerary={itinerary} params={params.id} user={props.user} activities={props.activities} />)) : 
                    (
                    <h2 className="mensaje-construccion">There are not itineraries for this city yet...</h2>
                    )): <Spinner className="spinner" animation="border" variant="danger" />
            }
        </div>
    )
}


const mapDispatchToProps = {
    getCity: citiesActions.getCity,
    getCities: citiesActions.getCities,
    getItineraries: itinerariesActions.getItineraries,
    setLoad: citiesActions.setLoad,
}

const mapStateToProps = (state) => {
    return {
        city: state.citiesReducer.city,
        itineraries: state.itinerariesReducer.itineraries,
        loading: state.citiesReducer.loading,
        activities: state.activitiesReducer.activities,
        token: state.authReducer.token,
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardCity)
