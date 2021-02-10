import axios from 'axios';
import React, {useEffect, useState}  from 'react'
import { Link, useParams } from 'react-router-dom'

function UserList() {
const  apiUrl = 'http://localhost:3004/users';
const { id } = useParams()  
const [user, setUser] = useState([]);

const loadUser = async  () => {
    const result = await axios.get(apiUrl)
    setUser(result.data.reverse())
    //console.log(result.data);
} 
useEffect(() => {
    loadUser();
},[]);


const deleteUser = async  (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`)
    loadUser();
} 


return (

<table>
  <thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Roll Number</th>
    <th>Class</th>
    <th style={{width: "220px"}}>Action</th>
    </tr>
    </thead>
    <tbody>
 
    {user.map((user, index)=>(
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.rollNumber}</td>
        <td>{user.whichclass}</td>
        <td>
            <Link className="action-Link" to={`/student/view/${user.id}`}>View</Link>
            <Link className="action-Link" to={`/student/edit/${user.id}`}>Edit</Link>
            <Link className="action-Link" onClick={() => deleteUser(user.id)}>Delete</Link>
        </td>
    </tr>
    ))}

    </tbody>
</table>
    ) 
}

export default UserList;
