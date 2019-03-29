import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {

        };
    };

    render() {
        return(
            <div className="home-page-box">

                <div className="home-page">
                    <h1>WELCOME TO SHELFIE!</h1>
                    <Link to="/store"><h5>See what products we have available</h5></Link>
                </div>

            </div>
        )
    }
}

export default Home