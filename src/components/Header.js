import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="container">
                    <Link to="/" id="branding">
                        <img src="images/logo.png" alt="logo" className="logo" />
                        <div className="logo-copy">
                            <h1 className="site-title">Company Name</h1>
                            <small className="site-description">Tagline goes here</small>
                        </div>
                    </Link>

                    <div className="main-navigation">
                        <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><Link to="/">Home</Link></li>
                            <li className="menu-item"><Link to="/about">About</Link></li>
                        </ul>

                        <form action="#" className="search-form">
                            <input type="text" placeholder="Search..." />
                            <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>

                    <div className="mobile-navigation"></div>
                </div>
            </header>
        )
    }
}
