import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Projects/>
        <Contact />
        <h1 className="name">Aladdin Omar</h1>
        <p className="adjective">Software Developer</p>
        <h2 className="experience">Experience</h2>
      </div>
    );
  }
}

export default App;
