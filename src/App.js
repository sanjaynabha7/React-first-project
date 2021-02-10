import React from 'react'
import './App.css';
import './easy-responsive-shortcodes.css';


import { BrowserRouter as Router, Route , Switch  } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import NotFound from "./Components/NotFound";
import AddUser from './Components/Users/AddUser'
import EditUser from './Components/Users/EditUser'
import ViewUser from './Components/Users/ViewUser'
import Formjson from './Components/Form-json'
import contactData from './Components/FormData'
import Practice from './Components/Practice'


const App = () => {
  return( 
  <Router>
    <div className="Outer">
        <Header />
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/about"  component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/student/view/:id" component={ViewUser} />
          <Route exact path="/student/add" component={AddUser} />
          <Route exact path="/student/edit/:id" component={EditUser} />
          <Route exact path="/form-json" component={Formjson} />
          <Route exact path="/contact-data" component={contactData} />
          <Route exact path="/practice" component={Practice} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>
    </Router>
  );   
}


export default App;
