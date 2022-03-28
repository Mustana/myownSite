

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './Style.css';
import creeativetool from "../src/images/creeativetool.png";
import frontendtool from "../src/images/frontendtool.png";


const Skills = () => {

    return (
    <>


<div className="container-fluid" id="sectionHead">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase default-margin-top">Skills</h2>
        </div>

        <div className="row ">
            <div className="col-lg-8 mx-auto text-center default-margin-top"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <div className="team-member">
                    <img className="img-fluid" src={creeativetool} alt="..." />
        </div>
            </div>
            <div className="col-lg-6">
                <div className="team-member">
                <img className="img-fluid" src={frontendtool} alt="..." />
                   
        </div>
            </div>
            
        </div>
      
    </div>

    </div>              
        
    </>
    );
    }
      
    export default Skills;