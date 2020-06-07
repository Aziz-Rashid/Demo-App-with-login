import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './Login.css'
export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let isLogIn = true
        if (token === null){
            isLogIn = false
        }
        this.state ={
            username : "",
            password : "",
            isLogIn
        }
        this.changes = this.changes.bind(this)
        this.submits = this.submits.bind(this)
        this.change = this.change.bind(this)
        // this.arr = this.arr.bind(this)
    }
    changes(event){
        // let a = e.target.value;
        this.setState({
            username: event.target.value,
            
        })
    }
    // arr(){
    //     this.setState({
    //         username: "",
    //         password: ""
    //     })
    // }
    change(e){
        let a = e.target.value;
        this.setState({
            password: a,
            
        })
    }
    submits(event){
        event.preventDefault()
        const {username,password} = this.state
        if (username === "aziz"&& password === "rashid"){
            localStorage.setItem("token","hahdhadsoajsdadasdadasdkfjaslfkjask")
            this.setState({
                isLogIn: true
            })
        }else{
            this.setState({
                username: "",
                password: ""
            })
          let a =  document.getElementById("is")
          a.textContent = "you Enter rong password"
        }
    }
   
    render() {
        if (this.state.isLogIn){
            return( 
                <Redirect to="/Home"/>
            )
        }
        return (
            <div className="main">
               <div className="heading1"><h1>Login</h1></div>
               <form className="center" onSubmit={this.submits}>
                   <input className="text1" type="text" placeholder="username" value={this.state.username} onChange={this.changes} required/><br />
                   <input className="password" type="password"  placeholder="password" value={this.state.password} onChange={this.change} required/><br />
                 <input className="sub" type="submit" />
                   <h1 id="is" className="head"> </h1>
               </form>
            </div>
        )
    }
}