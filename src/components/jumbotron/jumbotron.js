import React, { Component } from 'react';
import './jumbotron.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Джумбатрон</h1>
              <p className="lead">Тут будуть всякі класні штуки і карусель фоток</p>
            </div>
          </div>
        )
    }
}
