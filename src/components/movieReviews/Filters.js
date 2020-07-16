import React, { Component } from 'react'

export default class Filters extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
