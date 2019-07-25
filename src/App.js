import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


import Header from "./Header"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </Router>
    </div>
  );
}

export default App;
