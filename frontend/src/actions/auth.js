import * as constants from "../constants";
import axios from "axios";
import setToken from "../setToken"


export const registerUser=(formData)=>async(dispatch)=>{
    try {
            const config={
                headers:{
                    "Content-Type": "application/json",

                }
            }
            const body= JSON.stringify(formData)
      const response= await axios.post( "http://localhost:4000/api/users/register",body,config);
        dispatch({
            type:constants.REGISTER_SUCCESS,
           payload:response.data
        })
        dispatch(getUser())
    } catch (error) {
        dispatch({
            type:constants.REGISTER_FAIL,
            payload:error
        })
    }
}
