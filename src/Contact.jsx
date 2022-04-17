
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { ImFacebook2, ImLinkedin ,ImInstagram, ImTwitter, ImMobile2 , ImMail } from "react-icons/im";
import { BiMobileVibration } from "react-icons/bi";
import './Style.css';




const Contact = () => {
    
   

    return (
    <>
<div className="container-fluid" id="Contact">
    <div className="container" >
        

        <div className="row">
        <div className="col-lg-10 mx-auto text-left mobiletext" style={{margin: "10px 0px 10px 0px"}} >
             <ImMobile2 color="white" fontSize="1.5em"/> : +971 50 352 9579  |  <ImMail color="white" fontSize="1.5em"/> : mustu02@gmail.com
            </div>
            <div className="col-lg-2 mx-auto text-right" style={{margin: "10px 0px 10px 0px"}}>
            <a href="https://www.facebook.com/mustafa.kushalgadwala" target="_blank">
                <ImFacebook2 color="white" fontSize="1.5em" style={{padding: "0px 4px 0px 4px"}}/>
                </a>
                <a href="https://www.linkedin.com/in/mustafakushalgadwala/" target="_blank">
                    <ImLinkedin color="white" fontSize="1.5em" style={{padding: "0px 4px 0px 4px"}}/>
                    </a>
            <a href="https://www.instagram.com/mkusha/" target="_blank">
                <ImInstagram color="white" fontSize="1.5em" style={{padding: "0px 4px 0px 4px"}}/>
                </a>
                <a href="https://twitter.com/Mustu02Zoher" target="_blank">
            <ImTwitter color="white" fontSize="1.5em" style={{padding: "0px 4px 0px 4px"}}/>
            </a>
            </div>
        </div>

        
       
      
    </div>

    

    </div>  

    <div className="container-fluid" style={{backgroundColor: "#c1c1c1"}}>
        
    <div className="text-center text-dark footerText">
    © 2022 Copyright
    
  </div>

    </div>





    </>
    );
    }
      
    export default Contact;