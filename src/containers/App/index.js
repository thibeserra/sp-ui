import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';

const propTypes = {
  AppStore: PropTypes.any
}

@inject('AppStore')
@observer
class App extends Component {

  componentDidMount() {
    console.log(JSON.stringify(process.env))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {this.props.AppStore.showMessage()}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            {`${process.env}/`}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
