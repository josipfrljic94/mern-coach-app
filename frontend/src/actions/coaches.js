import * as constants from  "../constants"
import axios from "axios";

export const getCoaches=()=>async(dispatch)=>{
    try {
        dispatch({ type: constants.GET_REQUEST_COACHES});
        const res = await axios.get(`http://localhost:5010/api/coaches`);
        dispatch({ type: constants.GET_COACHES, payload: res.data });
    } catch (error) {
        dispatch({
            type:constants.GET_COACHES_FAILS,payload:error
        })
    }
  
}
