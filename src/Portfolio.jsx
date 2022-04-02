
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Style.css';
import Videos from "./Videos";
import Frontend from "./Frontend";
import DisplayAds from "./DisplayAds";
import Error from "./Error";
import Contact from "./Contact";
import PortfolioNavigation from "./PortfolioNavigation";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";




const Portfolio = () => {

    

    return (
    <>

        <section className="page-section" id="portfolio">
        <div className="container">
            <div className="text-center default-margin-top">
                <h1 className="section-heading">Portfolio</h1>
                <h2 className="section-heading subheaderText">Navigate each section by clicking its link below.</h2>
        </div>
   
            <div className="row">
           
                <Router> 
                <PortfolioNavigation />
                    <Routes>
                        <Route path="/" element = {<Videos/>}/>
                        <Route path="/myownSite" element = {<Videos/>}/>
                        <Route path="/Videos" element = {<Videos/>}/>
                        <Route path="/Frontend" element = {<Frontend/>}/>
                        <Route path="/DisplayAds" element = {<DisplayAds/>}/>
                        <Route path="*" element = {<Videos/>}/>
                        <Route path="/contact" element = {<Contact/>}/>
                    </Routes>       
                </Router>
        
              
            </div>
        </div>
    </section>
    </>
    );
}
  
export default Portfolio;