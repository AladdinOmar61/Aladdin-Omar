import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="cover-image">
          <img
            className="name-background"
            src="https://images.wallpaperscraft.com/image/macbook_pro_apple_laptop_headphones_table_98893_1280x720.jpg"
          />
          <div className="cover-text">
            <h1 className="name">Aladdin Omar</h1>
            <p className="adjective">Software Developer</p>
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
