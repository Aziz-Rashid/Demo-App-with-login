import React, { Component } from 'react'
import './Home.css'
import {Link, Redirect} from 'react-router-dom'
export default class Home extends Component {
    constructor(props) {
        super()
        let isLogIn = true
        const token = localStorage.getItem("token") 
        if (token === null){
            isLogIn = false
        }
        this.state = {
            tudo: "",
            tudolist: [],
            isLogIn
        }
        this.changehandler = this.changehandler.bind(this);
        this.clickhander = this.clickhander.bind(this);
        this.delete = this.delete.bind(this)
    }
    changehandler(event) {
        this.setState({
            tudo: event.target.value,
        })
    }
    clickhander() {
        var tudoitem = this.state.tudo;
        var tudointance = this.state.tudolist;
        tudointance.push(tudoitem)
        this.setState({
            tudolist: tudointance,
            tudo: "",
            

        })
    }
    delete(event) {
        var id = event.target.id;
        var tudointance = this.state.tudolist;
        tudointance.splice(id, 1)
        this.setState({
            tudolist: tudointance
        })
    }
    render() {
        if (this.state.isLogIn === false){
            return(
                <Redirect to="/" />
            )
        }
        var lists = this.state.tudolist.map((e, i) =>
            <li key={i}>{e} <span onClick={this.delete} id={i} className="new"><b>X</b></span></li>
        )
        return (
            <div className="mains">
                <div className="fle">
                    <div>
                 <h1 className="ham">this is admin page </h1>
                 </div>
                 <div>
                <button className="bt"><Link className="j" to="/Logout" >Logout </Link></button>
                </div>
                </div>
                <div className="heading">
                    
                    <h1 >Todo App</h1>
                    <br />
                </div>
                <div className="text">
                    <br />
                    <input type="text" placeholder="Enter your Tudo's here" value={this.state.tudo} onChange={this.changehandler} />
                </div>
                <div className="list">
                    <ul>
                        {lists}
                    </ul>
                </div>
                <div className="but">
                    <button onClick={this.clickhander}>Save Tudo's</button>
                </div>
            </div>
        )

    }
}
