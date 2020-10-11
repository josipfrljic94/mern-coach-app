import React from 'react';

const Coach = ({coach}) => {
    return (
        <div className="coach">
            <div className="coach-card">
                <div className="coach-card-header">
                <h1>{coach.name}</h1>
                </div>
                <div className="coach-card-img">
                <img src={`images/${coach.img}.jpg`} alt={coach.img}></img>
                </div>
               
                <div className="coach-card-footer">
                    <div>
                    {coach.master.map(m=>{
                        return(
                        <h6>{m}</h6>
                        )
                    })}
                    </div>
                   
                    <span>{coach.clients} clients</span>
                    
                    
                </div>
               
            </div>
        </div>
    )
}
export default Coach