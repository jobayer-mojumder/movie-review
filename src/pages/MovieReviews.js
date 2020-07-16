import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MovieListSingle from '../components/movieReviews/MovieListSingle';
import Filters from '../components/movieReviews/Filters';

export default class MovieReviews extends Component {
    render() {
        return (
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>Movie Review</span>
                    </div>

                    <div className="filters">
                        <Filters />
                    </div>
                    <div className="movie-list">
                        <MovieListSingle />
                        <MovieListSingle />
                        <MovieListSingle />
                        <MovieListSingle />
                        <MovieListSingle />
                        <MovieListSingle />
                        <MovieListSingle />
                        <MovieListSingle />
                    </div>

                    <div className="pagination">
                        <Link to="#" className="page-number prev"><i className="fa fa-angle-left"></i></Link>
                        <span className="page-number current">1</span>
                        <Link to="#" className="page-number">2</Link>
                        <Link to="#" className="page-number">3</Link>
                        <Link to="#" className="page-number">4</Link>
                        <Link to="#" className="page-number">5</Link>
                        <Link to="#" className="page-number next"><i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}
