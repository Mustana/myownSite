
import React from "react";
import {NavLink } from 'react-router-dom'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Style.css';



const PortfolioNavigation = () => {
    
   
  
    
    return (
        
    <>
        <div size="sm"  className="btn-group mb-2 default-margin-bottom default-fonts"   >
            <NavLink  type="button" className="btn btn-primary " to="/myownSite/Videos">Video Animation</NavLink>
            <NavLink type="button" className="btn btn-primary" to="/myownSite/Frontend">Frontend</NavLink>
            <NavLink type="button" className="btn btn-primary" to="/myownSite/DisplayAds">HTML5 Ads</NavLink>       
        </div> 
      
    </>
    );
}



export default PortfolioNavigation;





