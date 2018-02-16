import React, { Component } from 'react';
import LandingPage from './components/landing-page'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Umbra</h1>
        <LandingPage />
      </div>
    );
  }
}