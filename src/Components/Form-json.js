import axios from 'axios'
import React, { useState } from 'react'

function Formjson() {

    const initialState = {
        name: "",
        email: "",
        skill: "",
        message: "",

    }
    const [contact, setContact] = useState({
        name: "",
        email: "",
        skill: "",
        message: "",
       
      })

    const [thankmsg, setThankmsg] =   useState()
    const optionList = [
    { id: 1, skill: 'HTML'},
    { id: 2, skill: 'CSS'},
    { id: 3, skill: 'PHP'},
    { id: 4, skill: 'JAVA'},
    { id: 5, skill: 'REACT'},
    ]

    const { name, email, skill, message  } = contact
       
    const handaleChange = (event) => {
        setContact({...contact, [event.target.name] : event.target.value })
    }
    
    
    const onSubmitUser = async (event) => {
        event.preventDefault();
       await axios.post('http://localhost:3004/contact-info', contact)
      // history.push('/')
       setContact(initialState); 
       setThankmsg("Your Form is Submitted")
       
    }

    return (
     <div className="contaidner">
            <form className="wpcf7"  id="contactfordm" onSubmit={onSubmitUser}>
                <div className="form">
                <p><input type="text" name="name" value={name} onChange={e => handaleChange(e)} placeholder="Name *"/></p>
                <p><input type="text" name="email" value={email} onChange={e => handaleChange(e)} placeholder="Email *"/></p>

               <p>
                    <select value={skill} name="skill" onChange={e => handaleChange(e)}>
                    {optionList.map((item) => (
                    <option key={item.id}>{item.skill}</option>
                         ))}
                    </select>
                    </p>

                    <p><textarea name="message" rows="3" value={message}  onChange={e => handaleChange(e)} placeholder="Message *"></textarea></p>

                <input type="submit" id="submit" className="clearfix btn" value="Send"/>
                </div>
                <p>{thankmsg}</p>
            </form>

                 

        </div>
    )
}

export default Formjson
