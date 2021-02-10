import React, {useEffect, useState}  from 'react'
import axios from 'axios';

function FormData() {

const [formData, setformData] = useState([]) 

const loadFormData = async () => {
    const result = await axios.get('http://localhost:3004/contact-info');
    setformData(result.data)
    //console.log(formData);
}
 
useEffect(() => {
    loadFormData();
},[])


    return (
        <div className="container">
<table>
  <thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Skill</th> 
    <th>Message</th>   
     </tr>
    </thead>
    <tbody>
 
    {formData.map((data, index)=>(
    <tr key={index}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.skill}</td>
        <td>{data.message}</td>
    </tr>
    ))}

    </tbody>
</table>
</div>
    )
}

export default FormData
