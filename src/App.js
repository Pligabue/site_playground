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
import Profile from './Profile';

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
                }, () => {
                    if (!this.state.isLoggedIn) {
                        clearUserData()
                        window.location.reload()
                    }
                })
            })
    }
  
    render () {
        return (<div className="App">
            <Router>
                <Header idusers={this.state.idusers} isLoggedIn={this.state.idusers} />
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/profile/:idusers" render={(props) => (
                        <Profile key={props.match.params.idusers} {...props} />
                    )} />
                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>)
    }
}

export default App;
