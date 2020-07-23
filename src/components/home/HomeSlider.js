import React, { Component } from 'react'
import axios from 'axios'

const Coverflow = require('react-coverflow');


export default class HomeSlider extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {

        const query = process.env.REACT_APP_API_URL +
            "/movie/top_rated?api_key=" +
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

        const customStyle = {
            width: '100%',
            maxHeight: '380px',
        }

        let movieList

        if (this.state.movies && this.state.movies.length > 0) {

            movieList = this.state.movies.map((item, index) => {
                return <img src={process.env.REACT_APP_IMAGE_PATH + item.poster_path}
                    alt={item.title} style={customStyle} />
            })

            console.log(movieList);
        }

        return (
            <div className="slider">
                <ul className="slides">
                    <Coverflow width="960" height="350"
                        displayQuantityOfSide={3}
                        navigation={false}
                        enableScroll={true}
                        clickable={true}
                        active={3}
                    >
                        {this.state.loading ? <img src="#" /> : movieList}

                    </Coverflow>
                </ul>
            </div>
        )
    }
}
