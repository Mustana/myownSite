

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './Style.css';
import creeativetool from "../src/images/creeativetool.png";
import frontendtool from "../src/images/frontendtool.png";


const Skills = () => {

    return (
    <>


<div className="container-fluid" id="Skills">
    <div className="container" >
        <div className="text-center">
            <h2 className="section-heading default-margin-top">Skills</h2>
        </div>

        <div className="row ">
            <div className="col-lg-12 mx-auto text-center default-margin-top"><p className="large text-muted">
            As a studio head, I lead and manage a team of developers, animators and finalizers, coordinating and aligning different flows, timelines and skill sets to ensure optimum output that exceeds clients’ expectations.
As a mentor, I teach and nurture the newer and junior members of my team.
As a developer, I build websites, games and web apps and components, in addition to creating a richer and more comprehensive online presence for our clients through rich media banners, animations and videos.

                </p></div>
        </div>

        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="team-member">
                    <img className="img-fluid" src={creeativetool} alt="..." />
        </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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