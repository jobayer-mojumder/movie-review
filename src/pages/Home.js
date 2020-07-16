import React, { Component } from 'react'
import HomeSlider from '../components/home/HomeSlider'
import Premiere from '../components/home/Premiere'
import SingleLatestMovie from '../components/home/SingleLatestMovie'
import SingleSidebarMovie from '../components/home/SingleSidebarMovie'

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
                                <SingleSidebarMovie />
                                <SingleSidebarMovie />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <SingleLatestMovie />
                        <SingleLatestMovie />
                        <SingleLatestMovie />
                        <SingleLatestMovie />
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
