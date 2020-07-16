import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Premiere extends Component {
    render() {
        return (
            <div className="col-md-4">
                <h2 className="section-title">December premiere</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <ul className="movie-schedule">
                    <li>
                        <div className="date">16/12</div>
                        <h2 className="entry-title"><Link to="/">Perspiciatis unde omnis</Link></h2>
                    </li>
                    <li>
                        <div className="date">16/12</div>
                        <h2 className="entry-title"><Link to="/">Perspiciatis unde omnis</Link></h2>
                    </li>
                    <li>
                        <div className="date">16/12</div>
                        <h2 className="entry-title"><Link to="/">Perspiciatis unde omnis</Link></h2>
                    </li>
                    <li>
                        <div className="date">16/12</div>
                        <h2 className="entry-title"><Link to="/">Perspiciatis unde omnis</Link></h2>
                    </li>
                </ul>
            </div>
        )
    }
}
