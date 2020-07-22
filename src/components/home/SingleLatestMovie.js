import React, { Component } from 'react'
import { Link } from "react-router-dom";

import StarRatings from 'react-star-ratings';

export default class SingleLatestMovie extends Component {

    constructor(props) {
        super()
    }

    getYear(data) {
        var d = new Date(data);
        var n = d.getFullYear();
        return n;
    }

    getShortOverview(data) {
        if (data.length > 350) {
            return data.substr(0, 350) + '...'
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
                            <h4>{this.props.movie.title} ({this.getYear(this.props.movie.release_date)})</h4>
                            <p>{this.getShortOverview(this.props.movie.overview)}</p>
                            {/* <StarRatings
                                rating={2.403}
                                starDimension="40px"
                                starSpacing="15px"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
