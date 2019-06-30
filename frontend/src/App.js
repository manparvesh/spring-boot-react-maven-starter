import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/ping')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({data: data});
      })
    ;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Spring Boot React Starter!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is the data we ping the spring boot backend: <code>{this.state.data.ping}</code>
        </p>
      </div>
    );
  }
}

export default App;
