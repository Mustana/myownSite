

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './Style.css';
import creeativetool from "../src/images/creeativetool.png";
import frontendtool from "../src/images/frontendtool.png";


const Contact = () => {

    return (
    <>


<div className="container-fluid" id="foooter">
    <div className="container">
        <div>
            <h2 className="Footer-heading text-uppercase">Contact</h2>
        </div>

       

        <div className="row">
            <div className="col-lg-6">
                <div className="team-member">
                <table className="contact-info"> 
       
    
      </table>  
        </div>
            </div>
            <div className="col-lg-6">
                <div className="team-member">
                <i className="bi bi-facebook">Facebopk</i>
                <i className="bi bi-linkedin">Linkden</i>
        </div>
            </div>
            
        </div>

        <div className="row ">
            <div className="col-lg-8 mx-auto text-center default-margin-top"><p className="large text-muted">Copyright © Mustafa Portfolio 2022</p></div>
        </div>
      
    </div>

    </div>              
        
    </>
    );
    }
      
    export default Contact;