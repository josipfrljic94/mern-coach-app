import React from 'react'
import data from "../data";
import Coach from "./Coach";

const Coaches = () => {
   console.log(data.coaches)
    return (
        <div className="coaches">
            <div className="coaches-container">
            {data.coaches.map(coach=>{
                return(
                <Coach coach={coach} key={coach.key}/>
                )
            })}

            </div>
        
        
        </div>
    )
}
export default Coaches;