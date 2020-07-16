import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class HomeSlider extends Component {
    render() {
        return (
            <div className="slider">
                <ul className="slides">
                    <Carousel autoPlay>
                        <div>
                            <img src="dummy/slide-1.jpg" alt="Slide 1" />
                        </div>
                        <div>
                            <img src="dummy/slide-2.jpg" alt="Slide 2" />
                        </div>
                        <div>
                            <img src="dummy/slide-3.jpg" alt="Slide 3" />
                        </div>
                        <div>
                            <img src="dummy/slide-1.jpg" alt="Slide 1" />
                        </div>
                        <div>
                            <img src="dummy/slide-2.jpg" alt="Slide 2" />
                        </div>
                        <div>
                            <img src="dummy/slide-3.jpg" alt="Slide 3" />
                        </div>
                        <div>
                            <img src="dummy/slide-1.jpg" alt="Slide 1" />
                        </div>
                        <div>
                            <img src="dummy/slide-2.jpg" alt="Slide 2" />
                        </div>
                        <div>
                            <img src="dummy/slide-3.jpg" alt="Slide 3" />
                        </div>
                    </Carousel>
                </ul>
            </div>
        )
    }
}
