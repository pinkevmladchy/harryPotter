import React, { Component } from 'react';
import WorkWithApi from '../../services/server';
import Header from '../header/header'
import Jumbotron from '../jumbotron/jumbotron'
import RandomContainer from '../random-container/random-container'


export default class App extends Component {
  state = {
    randomStudent:{}
  }

  workerApi = new WorkWithApi();
  constructor(){
    super();
    this.updateRandom();
  }

  updateRandom = async() => {
    let newStud = await this.workerApi.request();
    this.setState((state)=>{
      return {randomStudent:newStud};
    });
  }

  render() {
    return (
      <>
        <Header />
        < Jumbotron />
        < RandomContainer student={this.state.randomStudent}/>
      </>
    )
  }
}