import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';


import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Posts from "./Posts"
import SignUp from "./SignUp"

import {getUserData, setUserData, clearUserData} from "./Authentication"
import axios from 'axios';

export const url_v3 = "http://127.0.0.1:5000"

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            idusers: getUserData().idusers,
            token: getUserData().token,
            isLoggedIn: false
        }
        
        if (this.state.idusers != null && this.state.token != null)
            axios.post(url_v3+"/verifylogin", {
                idusers: this.state.idusers,
                token: this.state.token
            }).then(response => {
                this.setState({
                    isLoggedIn: response.data
                })
            })
    }
  
    render () {
    return (<div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Redirect to="/home" />
            </Switch>
        </Router>
    </div>)
  }
}

export default App;
