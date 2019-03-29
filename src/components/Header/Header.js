import React, {Component} from 'react';
import { HashRouter, Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return(
            <HashRouter>
            <div className="header-box">

                <header>

                    <Link to="/" className="logo-brand-name">
                    <img width="40" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png" alt="company logo"/>
                    <h2>SHELFIE</h2>
                    </Link>

                    <div className="header-white-space"></div>

                    <div className="website-routing-menu">
                        <Link to="/"><h2>Home</h2></Link>
                        <Link to="/store"><h2>Store</h2></Link>
                        <Link to="/cart"><h2>Cart</h2></Link>
                    </div>

                </header>
            
            </div>
            </HashRouter>
        );
    };
};

export default Header