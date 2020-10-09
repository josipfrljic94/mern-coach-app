import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Service from './Service';




export default function Services() {

    const services=[
    {name:"medical",img:"look"},
    {name:"basic gym",img:"strength"},
    {name:"combat sports",img:"technique"},
    {name:"team sports", img:"sport"},
    {name:"cross-fit",img:"crossfit"},
    {name:"calisthenic", img:"calisthenic"}

]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };
    return (
        <div className="services">
            <h1>Services</h1>
            <div className="services-container">
            <Slider {...settings} style={{width:"90%",marginLeft:"5%"}} className="services-slider">
                {services.map(servic=>{
                    return(
                        <Service servic={servic}/>
                    )
                })}
            </Slider>
            </div>
        </div>
    )
}
