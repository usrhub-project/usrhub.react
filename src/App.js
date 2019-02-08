import React, { Component, useState } from 'react';
import logo from './logo.svg';
import UsrHub from 'usrhub';
import './App.css';

function Example() {
  const [count, setCount] = useState(0);
  
  const func = (state) => {
    setCount(state.count)
  }

  const hub = UsrHub({secret_key: "TP", usr: {name: "Paul"}, hub: {name: "hub:1"}, func});
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => hub.call("inc", {"count": count})}>
        Click me
      </button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example />
        </header>
      </div>
    );
  }
}

export default App;
