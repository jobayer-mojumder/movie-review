import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class MovieReviews extends Component {
    render() {
        return (
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="index.html">Home</Link>
                        <span>Movie Review</span>
                    </div>

                    <div className="filters">
                        <select name="#" id="#" placeholder="Choose Category">
                            <option value="#">Action</option>
                            <option value="#">Drama</option>
                            <option value="#">Fantasy</option>
                            <option value="#">Horror</option>
                            <option value="#">Adventure</option>
                        </select>
                        <select name="#" id="#">
                            <option value="#">2012</option>
                            <option value="#">2013</option>
                            <option value="#">2014</option>
                        </select>
                    </div>
                    <div className="movie-list">

                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-4.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">The adventure of Tintin</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-5.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">Hobbit</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-6.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">Exists</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-1.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">Drive hard</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-2.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">Robocop</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-7.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">Life of Pi</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
                        <div className="movie">
                            <figure className="movie-poster"><img src="dummy/thumb-8.jpg" alt="#" /></figure>
                            <div className="movie-title"><Link to="single.html">The Colony</Link></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
                        </div>
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
