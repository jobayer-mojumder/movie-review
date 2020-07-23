import React, { Component } from 'react'
import HomeSlider from '../components/home/HomeSlider'
import Premiere from '../components/home/Premiere'
import NowPlaying from '../components/home/NowPlaying'
import Populars from '../components/home/Populars'
// import SingleSidebarMovie from '../components/home/SingleSidebarMovie'


export default class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="page">
                    <div className="row">
                        <HomeSlider />
                        {/* <div className="col-md-3">
                            <div className="row">
                                <SingleSidebarMovie />
                                <SingleSidebarMovie />
                            </div>
                        </div> */}
                    </div>

                    <NowPlaying />
                    <Populars />

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
