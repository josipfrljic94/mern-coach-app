import React,{useEffect} from 'react'
import {connect} from "react-redux";
import Coach from "./Coach";
import {getCoaches} from "../actions/coaches";
import Loading from "./Loading";

const Coaches = ({coaches,loading,getCoaches}) => {
    console.log("hello",coaches)



useEffect(() => {
    getCoaches();
  },[getCoaches])

    return (
        <div className="coaches">
            {loading ? <Loading/> :
            <div className="coaches-container">
                {coaches.map(coach=>{
                    return(
                    <Coach coach={coach} key={coach.id}/>
                    )
                })}

            </div>
        
            }
        </div>
       
    )
}

const mapStateToProps=(state)=>({
    coaches:state.coaches.coaches,
    loading:state.coaches.loading
})
export default connect(mapStateToProps, {getCoaches })(Coaches);