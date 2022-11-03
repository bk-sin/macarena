import axios from 'axios';

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('https://mytinerary-acha.herokuapp.com/api/cities');
            
            dispatch({type: "GET_ALL_CITIES", payload: {response:response.data.response, loading:false}});
        }
    },
    filterCities: (cities, value) => {
        return (dispatch, getState) => {
            dispatch({type: "FILTER_CITIES", payload:{cities, value}})
        }
    },
    getCity: (id) => {
        return async (dispatch, getState) =>{
            const response = await axios.get('https://mytinerary-acha.herokuapp.com/api/city/' + id);
            dispatch({type:"GET_A_CITY_ID", payload:response.data.response })
        }
    }, 
    findCity: (cities, id) => {
        return (dispatch, getState) => {
            dispatch({type: "GET_A_CITY", payload:{cities, id}})
        }
    },
    setLoad: () => {
        return(dispatch, getState) =>{
            dispatch({type: "SET_LOAD", payload:true})
        }
    }
    
}



export default citiesActions;