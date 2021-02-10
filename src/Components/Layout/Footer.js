import react from "react";
import { Link  } from "react-router-dom";

const Footer = () => {
    return(
        <footer id="colophon" className="site-footer">
        <div className="container">
            <div className="site-info">
              <Link to="/">© React Theme - Created by React</Link>
            </div>
        </div>	
        </footer>
    )
}
export default Footer;