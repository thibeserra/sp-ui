import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './Style/App.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

const propTypes = {
  AppStore: PropTypes.any
}

@inject('AppStore')
@observer
class App extends Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const branches = await this.props.AppStore.getBranchesPCP();
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
