import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    msg: ""
  };
  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          msg: json.msg
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.msg}</h1>
        </header>
        <Route path="/beef" render={() => <p>Hello Beef</p>} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
