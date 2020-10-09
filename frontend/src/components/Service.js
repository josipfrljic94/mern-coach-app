import React from 'react'


export const Service = ({servic}) => {
    return (
        <div className="service">
            <div className="service-img-container">
            <img src={`/images/${servic.img}.jpg`} alt={servic.img}></img>
            </div>
           <div className="service-footer" >
               <span>
               {servic.name}
               </span>
               <a  href="#!" className="btn-secondary">Detail</a>
              
           </div>

            
        </div>
    )
}




export default Service;
