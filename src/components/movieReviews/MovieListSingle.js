import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class MovieListSingle extends Component {
    render() {
        return (
            <div className="movie">
                <figure className="movie-poster"><img src="dummy/thumb-3.jpg" alt="#" /></figure>
                <div className="movie-title"><Link to="single.html">Maleficient</Link></div>
                <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
            </div>
        )
    }
}
