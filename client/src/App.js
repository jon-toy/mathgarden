import React, { Component } from 'react';
import ViewQuestion from './components/tend/question/ViewQuestion'
import './App.css';

class App extends Component {

  render() {
    var myGreeting = "Hello";

    return (
      <div className="App">
        <ViewQuestion greeting={myGreeting} farewell={"Goodbye"} link={"https://jessicaswanson.dev"}/>
      </div>
    );
  }
}

export default App;
