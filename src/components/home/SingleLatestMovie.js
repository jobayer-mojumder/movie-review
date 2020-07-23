import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SingleLatestMovie extends Component {

    constructor(props) {
        super()
    }

    getYear(data) {
        var res = new Date(data);
        var year = res.getFullYear();
        return year;
    }

    getShortOverview(data) {
        if (data.length > 300) {
            return data.substr(0, 300) + '...'
        } else {
            return data
        }
    }

    render() {
        return (
            <div className="col-sm-6 col-md-3">
                <div className="latest-movie">
                    <div className="flipper">
                        <div className="front">
                            <Link to="/"><img src={process.env.REACT_APP_IMAGE_PATH + this.props.movie.poster_path} alt="Movie 3" /></Link>
                        </div>

                        <div className="back">
                            <h3 className="highlight">{this.props.movie.title} ({this.getYear(this.props.movie.release_date)})</h3>
                            <h4 className="highlight2">Rating: {this.props.movie.vote_average}</h4>
                            <p>{this.getShortOverview(this.props.movie.overview)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
