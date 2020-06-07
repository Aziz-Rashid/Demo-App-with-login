import React, { Component } from 'react'
import './About.css'
import Pic from './about-us.jpg'
import Mena from './member-1.jpg'
import Menas from './member-2.jpg'
import Menad from './member-3.jpg'
import Menaf from './member-4.jpg'
import Menag from './member-5.jpg'
import Menah from './member-6.jpg'
// import New from './ctc-bg.jpg'
export default class About extends Component {
    render() {
        return (
            <div id="top">
                <div class="hammadi">
                    <div className="left">
                        <p>Home  <span className="abo">. About</span></p>
                    </div>
                    <div className="right">
                        <h1>About Us</h1>
                    </div>
                </div>
                <div class="v">
                    <div className="pic">
                        <img src={Pic} alt=""/>
                    </div>
                    <div className="tex">
                        <p class="n">About Us</p>
                        <h1>About Story</h1>
                        <p className="m">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod.Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod.Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="dev">
                    Our Developer
                    </div>
                <div className="mm">

                    <div>
                        <img src={Mena} alt=""/>
                    </div>
                    <div>
                        <img src={Menas} alt=""/>
                    </div>
                    <div>
                        <img src={Menad} className="a" alt=""/>
                    </div>
                </div>
                <div className="nn">
                    <div>
                        <img src={Menaf} alt=""/>
                    </div>
                    <div>
                        <img src={Menag} alt=""/>
                    </div>
                    <div>
                        <img src={Menah} className="b" alt=""/>

                    </div>

                </div>
                <div className="c">
                    <h1>We Create Trends For The World</h1>

                    <p>Donec faucibus consequat ante. Mauris eget mi sed ex efficitur porta id non quam. Cras aliquam turpis tellus, quis laoreet lacus congue sed. Nullam at est quis urna vestibulum interdum. Praesent auctor leo ut massa ultrices tempor.</p>
                    <div className="tops">
                        <a href="#top"> <button type="button">Top</button></a></div>
                </div>
            </div>
        )
    }
}
