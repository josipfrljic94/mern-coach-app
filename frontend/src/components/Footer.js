import React from 'react';
import {FaInstagramSquare } from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";

export default function Footer() {
    const date= new Date();
    return (
        <div className="footer">
            <h1>Coach</h1>
            <div className="footer-container">
              
                <div className="footer-nav">
                <h3>Navigation</h3>
                    <ul>
                       
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Services</li>
                    </ul>
                    </div>
                    <div className="LegSup">
                    <h3>Policy</h3>
                        <ul>
                          
                            <li>Terms of use</li>
                            <li>Policy</li>
                            <li>Help Center</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="follow-us">
                    <h3>Social</h3> 
                        <ul   style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                                
                            <li><FaInstagramSquare size="34"/></li>
                            <li><FaTwitterSquare size="34" /></li>
                            <li><FaFacebookSquare size="34" /></li>
                           
                        </ul>
                    </div >
            </div>
                <h3>{date.getFullYear()} All Right Reserved</h3>
        </div>
    )
}
