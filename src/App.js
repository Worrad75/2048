import React from 'react';
import './App.css';
import Board from "./containers/Board"

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Board/>
      </div>
    );
  }

}