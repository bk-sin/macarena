const initialState = {
    state:[],
    cities:[],
    auxiliar:[],
    city: {},
    loading: true
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {   
        case 'GET_ALL_CITIES':
            return {
                ...state,
                cities: action.payload.response,
                auxiliar: action.payload.response,
                loading: action.payload.loading
            }
        case 'FILTER_CITIES':
            const filtered = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))
            return{
                ...state,
                auxiliar: filtered
            }
        case 'GET_A_CITY_ID':
            return{
                ...state,
                city: action.payload
            }
        case 'GET_A_CITY':
            const city = action.payload.cities.find(city => city._id === action.payload.id)
            return{
                ...state,
                city: city
            }
        case 'SET_LOAD':
            return{
                ...state,
                loading: action.payload
            }
            default: return state
        
    }
}

export default citiesReducer;