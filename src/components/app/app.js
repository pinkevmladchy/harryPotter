import React, { Component } from 'react';
import Header from '../header/header'
import Jumbotron from '../jumbotron/jumbotron'
import RandomContainer from '../random-container/random-container'


export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Jumbotron />
        <RandomContainer />
      </>
    )
  }
}
