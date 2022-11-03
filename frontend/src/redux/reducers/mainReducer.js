import {combineReducers} from "redux"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"
import authReducer from "./authReducer"
import activitiesReducer from "./activitiesReducers"


const mainReducer = combineReducers({
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer,
    authReducer: authReducer,
    activitiesReducer: activitiesReducer,
})

export default mainReducer