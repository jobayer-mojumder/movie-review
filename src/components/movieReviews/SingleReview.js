import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleReview extends Component {

    constructor(props) {
        super()
        this.state = {
            movie: [],
            loading: false,
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        const query = process.env.REACT_APP_API_URL +
            "/movie/" + id + "?api_key=" +
            process.env.REACT_APP_API_KEY

        this.setState({ loading: true })

        axios.get(query).then((res) => {
            this.setState({
                movie: res.data,
                loading: false
            })
            console.log(this.state.movie);
        });

    }

    render() {
        return (
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/reviews">Movie Review</Link>
                        <span>{this.state.movie.title}</span>
                    </div>

                    <div className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <figure className="movie-poster"><img src={process.env.REACT_APP_IMAGE_PATH + this.state.movie.poster_path} alt="#" /></figure>
                            </div>
                            <div className="col-md-6">
                                <h2 className="movie-title">{this.state.movie.title}</h2>
                                <div className="movie-summary">
                                    <p>{this.state.movie.overview}</p>
                                </div>
                                <ul className="movie-meta">
                                    <li><strong>Rating:</strong> {this.state.movie.vote_average}</li>
                                    <li><strong>Length:</strong> {this.state.movie.runtime} min</li>
                                    <li><strong>Premiere:</strong> {this.state.movie.release_date}</li>
                                    <li><strong>Category:</strong> Animation/Adventure/Comedy</li>
                                </ul>

                                <ul className="starring">
                                    <li><strong>Directors:</strong> Kirk de Mico (as Kirk DeMico). Chris Sanders</li>
                                    <li><strong>Writers:</strong> Chris Sanders (screenplay), Kirk De Micco (screenplay)</li>
                                    <li><strong>Stars:</strong> Nicolas Cage, Ryan Reynolds, Emma Stone</li>
                                </ul>
                            </div>
                        </div>
                        <div className="entry-content">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
