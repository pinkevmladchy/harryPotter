import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Harry Potter</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Characters <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Houses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Students</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Staff</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
