
import React from "react";
import {Link} from 'react-router-dom'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Style.css';



const PortfolioNavigation = () => {
    
    
    const handleClick=(e)=>{
        console.log(e.target)
      }
    return (
        
    <>
        <div className="btn-group default-margin-bottom default-fonts"  onClick={handleClick} role="group" aria-label="Basic outlined example" >
            <Link  type="button" className="btn btn-primary focus"  to="/Videos">Animation/Video Editing</Link>
            <Link type="button" className="btn btn-primary" to="/Frontend">Frontend Development</Link>
            <Link type="button" className="btn btn-primary" to="/DisplayAds">HTML5 Animated Ads</Link>
        </div>
    </>
    );
}



export default PortfolioNavigation;





