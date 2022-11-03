import axios from 'axios'
import {toast} from 'react-toastify'




const itinerariesActions = {
    getItineraries: (city_id) => {
        return async (dispatch, getState) => {
            let response = await axios.get("https://mytinerary-acha.herokuapp.com/api/itinerary/" + city_id)
            dispatch({type: "GET_ITINERARY", payload: response.data.response})
        }
    },
    likes: (userId, itineraryId, city_id) => {
        return async (dispatch, getState) => {
            if(userId && itineraryId){
                await axios.put("https://mytinerary-acha.herokuapp.com/api/like/", { itineraryId, userId} )
                let response = await axios.get("https://mytinerary-acha.herokuapp.com/api/itinerary/" + city_id)
                dispatch({type: "GET_LIKES", payload: response.data.response})
            }else{
                toast.warning( "You need to sign in", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    },
    getComments: (itineraryId) => {
        return async (dispatch, getState) => {
            let response = await axios.get("https://mytinerary-acha.herokuapp.com/api/comments/" + itineraryId)
            dispatch({type: "GET_COMMENTS", payload: response.data.response })
            
        }
    },
    getAllComments: () => {
        return async (dispatch, getState) => {
            let response = await axios.get("https://mytinerary-acha.herokuapp.com/api/comments")
            dispatch({type: "GET_ALL_COMMENTS", payload: response.data.response })
        }
    },
    postComments: (itineraryId, user, message) => {
        
        return async(dispatch, getState)=>{
            if(user && itineraryId){
                await axios.post("https://mytinerary-acha.herokuapp.com/api/comments/" + itineraryId, {user, message})
                let res = await axios.get("https://mytinerary-acha.herokuapp.com/api/comments")
                dispatch({type: "POST_COMMENTS", payload: res.data.response })
            }else{
                
                toast.warning( "You need to sign in", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    },
    editComments: (commentId, message) => {
        return async(dispatch, getState)=>{
            const token = localStorage.getItem("token")
            await axios.put("https://mytinerary-acha.herokuapp.com/api/comments" , {commentId, message}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            let res = await axios.get("https://mytinerary-acha.herokuapp.com/api/comments")
            dispatch({type: "EDIT_COMMENTS", payload: res.data.response })
        }
    },
    deleteComments: (commentId) => {
        return async(dispatch, getState)=>{
            const token = localStorage.getItem("token")
            await axios.delete("https://mytinerary-acha.herokuapp.com/api/comments/" + commentId , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            let res = await axios.get("https://mytinerary-acha.herokuapp.com/api/comments")
            dispatch({type: "DELETE_COMMENTS", payload: res.data.response })
        }
    },
}

export default itinerariesActions;