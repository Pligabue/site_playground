import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Posts from "./Posts"
import SignUp from "./SignUp"

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
        </Router>
    </div>
  );
}

export default App;
