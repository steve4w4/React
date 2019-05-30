import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import { Button as SButton } from '@seman/semantic-ui-react'

// import logo from './logo.svg';
import './App.scss';
import CButton from './Components/CButton'

class App extends Component {
  render() {
    return (
      <div className="app">
        <CButton />
        <Button variant="contained" color="primary" onClick={() => console.log('test')}>
          Hello World
        </Button>
      </div>
    );
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p> 
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

export default App;
