import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HomeSlider from '../components/home/HomeSlider'
import Premiere from '../components/home/Premiere'
import LatestMovie from '../components/home/LatestMovie'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="page">
                    <div className="row">
                        <div className="col-md-9">
                            <HomeSlider />
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-sm-6 col-md-12">
                                    <div className="latest-movie">
                                        <Link to="/"><img src="dummy/thumb-1.jpg" alt="Movie 1" /></Link>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12">
                                    <div className="latest-movie">
                                        <Link to="/"><img src="dummy/thumb-2.jpg" alt="Movie 2" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="latest-movie">
                                <Link to="/"><img src="dummy/thumb-3.jpg" alt="Movie 3" /></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="latest-movie">
                                <Link to="/"><img src="dummy/thumb-4.jpg" alt="Movie 4" /></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="latest-movie">
                                <Link to="/"><img src="dummy/thumb-5.jpg" alt="Movie 5" /></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="latest-movie">
                                <Link to="/"><img src="dummy/thumb-6.jpg" alt="Movie 6" /></Link>
                            </div>
                        </div>
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
