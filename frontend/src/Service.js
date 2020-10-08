import React from 'react'


export const Service = ({servic}) => {
    return (
        <div className="service">
            <div className="service-img-container">
            <img src={`/images/${servic.img}.jpg`}></img>
            </div>
           <div className="service-footer" >
               <span>
               {servic.name}
               </span>
               <a className="btn-secondary">Detail</a>
              
           </div>

            
        </div>
    )
}




export default Service;
