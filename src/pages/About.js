import React, { Component } from 'react'

import { Link } from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="index.html">Home</Link>
                        <span>About us</span>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <figure><img src="dummy/figure.jpg" alt="figure" /></figure>
                        </div>
                        <div className="col-md-8">
                            <p className="leading">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-9">
                            <h2 className="section-title">Vision &amp; Misssion</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam dignissimos ducimus qui blanditiis praesentium voluptatum atque.</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="section-title">Useful Links</h2>
                            <ul className="arrow">
                                <li><Link to="/">Eiusmod tempor incididunt</Link></li>
                                <li><Link to="/">Tenim ad minim venia</Link></li>
                                <li><Link to="/">Quis nostrud exercitation</Link></li>
                                <li><Link to="/">Ullamco laboris reprehenderit</Link></li>
                                <li><Link to="/">Duis aute dolor voluptat</Link></li>
                                <li><Link to="/">Velit esse cillum dolore</Link></li>
                                <li><Link to="/">Excepteur sint occaeca</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
