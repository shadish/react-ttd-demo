import React, { Component } from 'react';
import './App.css';
import CollapseSection from './components/CollapseSection';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">Lorem Ipsum Dolor</h1>
        </div>
        <div className="app-content">
          <div className="app-sideNav">
            <div className="app-sideNav-header">Some header</div>
            <a className="app-sideNav-element" href="#someLink">Some Link</a>
            <a className="app-sideNav-element" href="#someLink">Some Link</a>
            <a className="app-sideNav-element" href="#someLink">Some Link</a>
          </div>
          <div className="app-body">
            <div className="app-body-header">
            </div>
            <CollapseSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
