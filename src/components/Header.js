import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <header className="site-header">
                <div className="container">
                    <NavLink to="/" id="branding">
                        <img src="images/logo.png" alt="logo" className="logo" />
                        <div className="logo-copy">
                            <h1 className="site-title">Company Name</h1>
                            <small className="site-description">Tagline goes here</small>
                        </div>
                    </NavLink>

                    <div className="main-navigation">
                        <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><NavLink to="/" activeClassName="">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="/about">About</NavLink></li>
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
