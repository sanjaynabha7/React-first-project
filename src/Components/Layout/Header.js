import react from "react";
import { Link } from "react-router-dom";
import Navbar  from "./Navbar";
const Header = () => {
    return(
		<header id="masthead" className="site-header">
		<div className="site-branding">
			<h1 className="site-title"><Link to="/" rel="home">React</Link></h1>
			<h2 className="site-description">React Portfolio HTML Template</h2>
		</div>
            <Navbar />
		</header>
    )
}
export default Header;