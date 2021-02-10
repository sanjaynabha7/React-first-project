import react from "react";
import  Banner  from "./Layout/Banner";
import BlogList from "./Blog-list";
import Form from "./Form";
import UserList from './Users/UserList'
const Home = () => {
    return(
        <div className="HomePage">
            <div className="container">
                <Banner /> 
                <div className="wpcmsdev-columns">
                <h4>User Data</h4>	
                <UserList />
                    <div className="column column-width-one-half">
                        <h4>Teachers List</h4>						
                        <BlogList />				
                    </div>
                    <div className="column column-width-one-half">
                        <h4>Quick Contact</h4>						
                        <Form />
                    </div>
                </div>
            </div>



            
        </div>
    )
}

export default Home;