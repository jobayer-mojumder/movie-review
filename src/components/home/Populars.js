import React, { Component } from 'react'
import SingleLatestMovie from './SingleLatestMovie'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader"
import axios from 'axios'

export default class Populars extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            loading: false
        }
    }

    componentDidMount() {

        const query = process.env.REACT_APP_API_URL +
            "/movie/popular?api_key=" +
            process.env.REACT_APP_API_KEY

        this.setState({ loading: true })

        axios.get(query).then((res) => {
            this.setState({
                movies: res.data.results,
                loading: false
            })
            console.log(this.state.movies);
        });

    }

    render() {

        const override = css`
            display: block;
            margin: 40px auto;
            text-align: center;
            `;

        let movieList

        if (this.state.movies && this.state.movies.length > 0) {

            movieList = this.state.movies.slice(0, 4).map((item, index) => {
                return <SingleLatestMovie key={item.id} movie={item} />
            })
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="highlight">Most Popular {'>'} </h1>
                    </div>
                </div>
                <div className="row">
                    <ClipLoader
                        css={override}
                        size={100}
                        loading={this.state.loading}
                    />
                    {this.state.loading ? null : movieList}
                </div>
            </div>
        )
    }
}
