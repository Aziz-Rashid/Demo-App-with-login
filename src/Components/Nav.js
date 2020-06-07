import React, { Component } from 'react'
import Logo from './lo.svg'
import './Nav.css'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <div className="mj">
                <div className="logo">
                <Link className="line" to='/Home'><img src={Logo} alt="pic"/></Link>
                </div>
                <div className="menu">
                    <ul>
                        <Link className="line" to='/Home'><li>Home</li></Link>
                        <Link className="line" to='/About'><li>About Us</li></Link>
                        <Link className="line" to='/Contact'><li>Contact Us</li></Link>
                        {/* <Link class="line" to='/Blog'><li>Blogs</li></Link> */}
                    </ul>
                </div>
            </div>
        )
    }
}
