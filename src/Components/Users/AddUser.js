import axios from 'axios'
import React, { useState } from 'react'
import  { useHistory }  from 'react-router-dom'
function AddUser() {
const initialState = {
    name: "",
    rollNumber: "",
    DOBage: "",
    whichclass: "",
    address: "",
    phone: "",
    dadName: "",
    momName: ""
}

const [users, setUsers] = useState({
    name: "",
    rollNumber: "",
    DOBage: "",
    whichclass: "",
    address: "",
    phone: "",
    dadName: "",
    momName: ""
    
  })
const { name, rollNumber, whichclass, DOBage, address, phone, dadName, momName  } = users


const handaleChange = (event) => {
    setUsers({...users, [event.target.name] : event.target.value })
}

const history = useHistory()


const onSubmitUser = async (event) => {
    event.preventDefault();
   await axios.post('http://localhost:3004/users', users)
   //console.log(users);
   history.push('/')
    // setUsers(initialState); 
}
return (
        <div className="container">
           
            <form className="wpcf7"  id="contactform" onSubmit={onSubmitUser}>
            <h3>Add Student</h3>
                <div className="form">
                <p><input type="text" name="name" value={name} onChange={e => handaleChange(e)} placeholder="Name *"/></p>
                <p><input type="text" name="rollNumber" value={rollNumber} onChange={e => handaleChange(e)} placeholder="Roll No. *"/></p>
                <p><input type="text" name="whichclass" value={whichclass} onChange={e => handaleChange(e)} placeholder="Class"/></p>
                <p><input type="text" name="DOBage" value={DOBage} onChange={e => handaleChange(e)} placeholder="Date of Birth"/></p>
                <p><input type="text" name="address" value={address} onChange={e => handaleChange(e)} placeholder="Address"/></p>

                <p><input type="text" name="phone" value={phone} onChange={e => handaleChange(e)} placeholder="Phone"/></p>

                <p><input type="text" name="dadName" value={dadName} onChange={e => handaleChange(e)} placeholder="Father Name"/></p>

                <p><input type="text" name="momName" value={momName} onChange={e => handaleChange(e)} placeholder="Mother Name"/></p>
                
                <input type="submit" id="submit" className="clearfix btn" value="Send"/>
                </div>
            </form>
        </div>
    )
}

export default AddUser
