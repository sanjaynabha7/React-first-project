import axios from 'axios'
import React, { useState, useEffect } from 'react'
import  { useParams, useHistory }  from 'react-router-dom'

function EditUser() {

const { id } = useParams()    

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
   await axios.put(`http://localhost:3004/users/${id}`, users)
   history.push('/')
}
 
const loadUser = async  () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`)
    setUsers(result.data)
    console.log(result);
}
useEffect(() => {
    loadUser();
},[])



return (
        <div className="container">
            <form className="wpcf7"  id="contactform" onSubmit={onSubmitUser}>
                <div className="form">
                <p><input type="text" name="name" value={name} onChange={e => handaleChange(e)} placeholder="Name *"/></p>
                <p><input type="text" name="rollNumber" value={rollNumber} onChange={e => handaleChange(e)} placeholder="Roll No. *"/></p>
                <p><input type="text" name="whichclass" value={whichclass} onChange={e => handaleChange(e)} placeholder="Class"/></p>
                <p><input type="text" name="DOBage" value={DOBage} onChange={e => handaleChange(e)} placeholder="Date of Birth"/></p>
                <p><input type="text" name="address" value={address} onChange={e => handaleChange(e)} placeholder="Address"/></p>

                <p><input type="text" name="phone" value={phone} onChange={e => handaleChange(e)} placeholder="Phone"/></p>

                <p><input type="text" name="dadName" value={dadName} onChange={e => handaleChange(e)} placeholder="Father Name"/></p>

                <p><input type="text" name="momName" value={momName} onChange={e => handaleChange(e)} placeholder="Mother Name"/></p>
                
                <input type="submit" id="submit" className="clearfix btn" value="Update"/>
                </div>
            </form>
        </div>
    )
}

export default EditUser
