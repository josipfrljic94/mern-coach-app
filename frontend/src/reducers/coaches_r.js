import * as constants from  "../constants"

const initialState={
    coaches:[],
    loading:false,
    error:{}
}

const coaches=(state=initialState,action)=>{
    const {type,payload}=action

    switch(type){
        case constants.GET_COACHES:
            return{
                ...state,coaches:payload,loading:false
            }
        case constants.GET_REQUEST_COACHES:
            return{
                ...state,loading:true
            }
        case constants.GET_COACHES_FAILS:
            return{
                ...state,loading:false,error:payload
            }
        default:
             return state
    }
   
}

export default coaches;