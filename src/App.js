import React, { useState, useEffect, useContext } from 'react';
import logo from './logo.svg';
import UsrHub, { useHubState } from 'usrhub';
import './App.css';

function Example() {

  const hub = useContext(Context);
  const [data, setData] = useState(hub.state);

  hub.makeTrigger((data) => {setData(data)});
  
  return (
    <div>
      <p>You clicked {data.count} times</p>
      <button onClick={() => hub.call("inc", data)}>
        Click me
      </button>
    </div>
  );
}

const Context = React.createContext();

function App() {

  const hub = UsrHub({secret_key: "TP", usr: {name: "Paul"}, hub: {name: "hub:1"}});
  
  return (
    <Context.Provider value={hub}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example />
      </header>
    </div>
    </Context.Provider>
  );
}
export default App;
