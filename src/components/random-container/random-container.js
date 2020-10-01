import React, { Component } from 'react';
import './random-container.css';
import Details from '../details/details'

export default class RandomContainer extends Component {
    render() {
        return (
            <div className='container'>
                <Details student={this.props.student}/>
            </div>
        )
    }
}
