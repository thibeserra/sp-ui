import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './Style/App.css';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';
import request from '../../request';

const propTypes = {
  AppStore: PropTypes.any
}

@inject('AppStore')
@observer
class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(JSON.stringify(process.env)) 
    // request('http://www.mocky.io/v2/5bd999282f00003e0006d202')
    this.props.AppStore.getAxios();
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
          <p>
            {this.props.AppStore.status}
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
