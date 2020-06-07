import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            textarea: "",
            new: []
        }
        this.changehandler = this.changehandler.bind(this)
    }
    changehandler(event){
        this.setState({
            username : event.target.value,
            email : event.target.value,
            textarea : event.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="ja">
                    <h1>Contact Us</h1>
                    <p>We are ready to lead you in the future</p>
                </div>
                <div className="kk">
                    <form>
                    <input type="text" placeholder="Enter Username" onChange={this.changehandler} />
                    <input type="Email" placeholder="Enter Your Email" onChange={this.changehandler} />
                    <textarea className="hom" onChange={this.changehandler} placeholder="Enter your text here....">
                    </textarea>
                    <input className="btu"  type="Submit" value="Submit" /> 
                    </form>
                </div>
            </div>
        )
    }
}
