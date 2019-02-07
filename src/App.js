import React, { Component } from 'react';
import logo from './logo.svg';
import UsrHub from 'usrhub';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.sendState = this.sendState.bind(this);
    this.setState = this.setState.bind(this);
    this.hub = UsrHub({
      secret_key: "THINKPAD",
      usr: {name: "Paul"},
      hub: {name: "hub:1"},
      func: this.setState
    })
    this.state = this.hub.test()
  }

  sendState(event) {
    this.hub.call("shout", {
      x: event.clientX,
      y: event.clientY
    })
  }

  setState(payload) {
    console.log(payload)
    this.setState({
      x: payload.clientX,
      y: payload.clientY
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ height: '100%' }} onMouseMove={this.sendState}>
            <h1>Move the mouse around!</h1>
            <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
