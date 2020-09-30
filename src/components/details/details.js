import React, { Component } from 'react';
import './details.css';

export default class Details extends Component {
    render() {
        return (
            <div className="media">
                <img src="../../../photo/harry-potter.png" className="align-self-center mr-3" />
                <div className="media-body">
                    <h5 className="mt-0">Детальна інфа про когось</h5>
                    <p>Дуже важна інфа про студента або працівника</p>
                    <p className="mb-0">Так само дуже важна інфа</p>
                </div>
            </div>
        )
    }
}
