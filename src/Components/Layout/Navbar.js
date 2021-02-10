import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

<nav id="site-navigation" className="main-navigation">
		<button className="menu-toggle">Menu</button>
		<div className="menu-menu-1-container">
			<ul id="menu-menu-1" className="menu">
				<li><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
				<li><Link className="nav-link" aria-current="page" to="/about">About</Link></li>
				<li><Link className="nav-link" aria-current="page" to="/blog">Blog</Link></li>
        		<li><Link className="nav-link" aria-current="page" to="/contact">Contact</Link></li>
				<li><Link className="nav-link" aria-current="page" to="/student/add">Add Student</Link></li>
				<li><Link className="nav-link" aria-current="page" to="/contact-data">Contact Data</Link></li>
				
				
			</ul>
		</div>
		</nav>

    )
}

export default Navbar;