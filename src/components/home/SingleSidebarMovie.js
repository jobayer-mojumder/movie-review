import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SingleSidebarMovie extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-12">
                <div className="latest-movie">
                    <Link to="/"><img src="dummy/thumb-2.jpg" alt="Movie 2" /></Link>
                </div>
            </div>
        )
    }
}
