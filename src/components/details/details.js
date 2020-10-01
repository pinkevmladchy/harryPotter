import React, { Component } from 'react';
import './details.css';

export default class Details extends Component {
    render() {
        const { student } = this.props;
        return (
            <div className="media">
                <img src={student.image} className="align-self-center mr-3" alt="" />
                <div className="media-body">
                    <h5 className="mt-0">Ім'я: {student.name}</h5>
                    <p>Гуртожиток: {student.house}</p>
                    <p>Патронус: {student.patronus}</p>
                    <p>Дата народження: {student.dateOfBirth}</p>
                    <p>Колір очей: {student.eyeColour }</p>
                    <p>Колір волосся: {student.hairColour}</p>
                </div>
            </div>
        )
    }
}
