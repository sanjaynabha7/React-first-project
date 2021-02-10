import React, {useEffect, useState} from 'react'

const Practice = () => {
    const myName = "Sanjay"
    const yourName = "Maan"
    const [name, setName] = useState(myName)

    const toggleClick = () => {
        name === myName ? setName(yourName) : setName(myName)
        // if(name === myName){
        //     setName(yourName)
        // } else {
        //     setName(myName)
        // }
        console.log("Working");
    }


    return (
        <div className="container">
            <h1>Hello I am {name}</h1>
            {/* <img src={process.env.PUBLIC_URL + "/images/img1.jpg"}/> */}
            <button onClick={toggleClick}>Click Me</button>
        </div>
    )
}

export default Practice
