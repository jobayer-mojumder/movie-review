import React, { Component } from 'react'
import HomeSlider from '../components/home/HomeSlider'
import Premiere from '../components/home/Premiere'
import SingleLatestMovie from '../components/home/SingleLatestMovie'
import SingleSidebarMovie from '../components/home/SingleSidebarMovie'


import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            loading: false
        }
    }

    componentDidMount() {

        const query = process.env.REACT_APP_API_URL +
            "movie/popular?api_key=" +
            process.env.REACT_APP_API_KEY +
            "&language=en-US&page=1"

        this.setState({ loading: true })

        fetch(query)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results,
                    loading: false
                })
                console.log(this.state.movies);
            })
    }

    render() {

        const override = css`
            display: block;
            margin: 40px auto;
            text-align: center;
            `;

        let movieData

        if (this.state.movies && this.state.movies.length > 0) {

            movieData = this.state.movies.map((item, index) => {
                return <SingleLatestMovie key={item.id} movie={item} />
            })
        }
        return (
            <div className="container">
                <div className="page">
                    <div className="row">
                        <div className="col-md-9">
                            <HomeSlider />
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <SingleSidebarMovie />
                                <SingleSidebarMovie />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ClipLoader
                            css={override}
                            size={100}
                            loading={this.state.loading}
                        />
                        {this.state.loading ? null : movieData}
                    </div>

                    <div className="row">
                        <Premiere />
                        <Premiere />
                        <Premiere />
                    </div>
                </div>
            </div>
        )
    }
}
