import React, {Component}  from 'react'

const initialState = {
    name : "",
    email : "",
    comment : "",
    skill : ''
}

export default class extends Component {
    constructor(props){
        super(props)
        this.state = initialState;
        this.handaleChange = this.handaleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { optionList :  ['Select Skill One', 'HTML', 'CSS', 'PHP', 'JAVA', 'REACT', 'ANGULAR']};
     }

     handaleChange (event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        })
    }


    onSubmit(event){
        event.preventDefault()
        alert(`
        Your message has been sent. Thank you!
        Your Name: ${this.state.name}.
        Your E-mail Address: ${this.state.email}.
        Your Skill: ${this.state.skill}.
        Your Message: ${this.state.comment}.
        `)
        this.setState(initialState);
        console.log(this.state);
    }

    render(){
        // Object destrucring Below
        const {name, email, comment, skill} = this.state
        return (
            <form className="wpcf7"  id="contactform" onSubmit={this.onSubmit}>

                 <div className="form">
                    <p><input type="text" name="name" value={name} onChange={this.handaleChange} placeholder="Name *"/></p>
                    <p><input type="text" name="email" value={email} onChange={this.handaleChange} placeholder="E-mail Address *"/></p>
                    <p><textarea name="comment" rows="3" value={comment} onChange={this.handaleChange} placeholder="Message *"></textarea></p>
                    <p>
                    <select value={skill} name="skill" onChange={this.handaleChange}>
                    {this.state.optionList.map((item, index) => (
                    <option key={index}>{item}</option>
                         ))}
                    </select>
                    </p>

                    <input type="submit" id="submit" className="clearfix btn" value="Send"/>
                </div>
                <div className="done" >								
                    Your message has been sent. Thank you!
                </div>
            </form>
        )
    }
}

