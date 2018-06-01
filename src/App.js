import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">Welcome to React</h1>
        </div>
        <div className="app-content">
          <div className="app-sideNav">
            <div className="app-sideNav-header"> Some header </div>
            <a className="app-sideNav-element" href="#someLink">Some Link</a>
            <a className="app-sideNav-element" href="#someLink">Some Link</a>
            <a className="app-sideNav-element" href="#someLink">Some Link</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
