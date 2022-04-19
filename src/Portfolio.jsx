
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Style.css';
import Videos from "./Videos";
import Frontend from "./Frontend";
import DisplayAds from "./DisplayAds";
import PortfolioNavigation from "./PortfolioNavigation";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";




const Portfolio = () => {

    

    return (
    <>
<h2>Hello World</h2>
        <section className="page-section" id="Portfolio">
        <div className="container" >
            <div className="text-center default-margin-top">
                <h1 className="section-heading">Portfolio</h1>
                <h2 className="section-heading subheaderText">Navigate each section by clicking its link below.</h2>
        </div>
   
            <div className="row">
           
                <Router> 
                <PortfolioNavigation />
                    <Routes>
                        <Route path="/myownSite/" element = {<Videos/>}/>
                        <Route path="/" element = {<Videos/>}/>
                        <Route path="/myownSite/Videos" element = {<Videos/>}/>
                        <Route path="/myownSite/Frontend" element = {<Frontend/>}/>
                        <Route path="/myownSite/DisplayAds" element = {<DisplayAds/>}/>
                        <Route path="*" element = {<Videos/>}/>
                    </Routes>       
                </Router>
        
              
            </div>
        </div>
    </section>
    </>
    );
}
  
export default Portfolio;
