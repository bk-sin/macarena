import axios from "axios"
import {toast} from 'react-toastify'

const authActions = {
    postUser: (newUser)=>{
        return async(dispatch, getState)=>{
            try{
                const user = await axios.post("https://mytinerary-acha.herokuapp.com/api/auth/signUp",{...newUser})
                if(user.data.success){
                    localStorage.setItem('token', user.data.response.token)
                    toast.success("Welcome " + user.data.response.newUser.name, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    dispatch({type:'NEW_USER', payload: user.data.response})
                }else{
                    toast.error(user.data.error, {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            }catch(error){
                console.log(error)
            }
        }
    },
    signIn: (email,password,google)=>{
        return async(dispatch, getState)=>{
            try{
                const user = await axios.post("https://mytinerary-acha.herokuapp.com/api/auth/signIn",{email,password,google})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token', user.data.response.token)
                    toast.success("Welcome " + user.data.response.emailExist.name, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    dispatch({type:'SIGN_IN', payload: user.data.response})
                }else{
                    toast.error(user.data.error, {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            }catch(error){
                console.log(error)
            }
        }
    },
    signToken: ()=>{
        return async (dispatch, getState) => {
            try {
            const token = localStorage.getItem("token")
            const response = await axios.get("https://mytinerary-acha.herokuapp.com/api/auth",{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            )
            dispatch({ type: "TOKEN",payload: response.data})
            } catch (error) {
            console.error(error)
            }
        }
    },
    signOut: () => {
        localStorage.removeItem("token")
    return (dispatch, getState) => {
        dispatch({type: "SIGN_OUT", payload: ""})
    }
    }
}


export default authActions