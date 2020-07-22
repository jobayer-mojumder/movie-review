import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SingleLatestMovie extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-sm-6 col-md-3">
                <div className="latest-movie">

                    <div></div>

                    <div class="back face">

                    </div>
                    <Link to="/"><img src={process.env.REACT_APP_IMAGE_PATH + this.props.movie.poster_path} alt="Movie 3" /></Link>
                </div>
            </div>
        )
    }
}
