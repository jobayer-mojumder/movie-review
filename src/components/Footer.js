import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="colophon">Copyright 2014 Company name, Designed by Themezy. All rights reserved</div>
                </div>

            </footer>
        )
    }
}
