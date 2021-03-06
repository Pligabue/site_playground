import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withCookies } from "react-cookie"
import "./App.css";


import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Posts from "./Posts"
import SignUp from "./SignUp"
import NoMatch from "./NoMatch"
import SinglePost from "./SinglePost"

import axios from 'axios';
import Profile from './Profile';

export const url_v3 = "http://127.0.0.1:5000"

class App extends React.Component {
    
    constructor(props) {
        super(props)
        
        const {cookies} = this.props
        
        this.state = {
            idusers: Number(cookies.get("idusersPL")),
            token: Number(cookies.get("tokenPL")),
            isLoggedIn: (cookies.get("idusersPL") != null && cookies.get("tokenPL") != null)
        }
        
        if (this.state.idusers != null && this.state.token != null) {
            axios.get(url_v3+"/verifylogin", {
                withCredentials: true
            })
            .catch(error => {
                cookies.remove("idusersPL")
                cookies.remove("tokenPL")
            })
        }
    }
  
    render () {
        return (<div className="App">
            <Header idusers={this.state.idusers} isLoggedIn={this.state.idusers} {...this.props} />
            <Switch>
                <Route path="/home" component={Home}/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/posts/page/:page" render={(props) => (
                    <Posts key={props.match.params.page} {...props} {...this.state} />
                )} />
                <Route exact path="/posts/id/:idposts" render={(props) => (
                    <SinglePost key={props.match.params.page} {...props} />
                )} />
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/profile/:idusers" render={(props) => (
                    <Profile key={props.match.params.idusers} {...props} {...this.state} />
                )} />
                <Route component={NoMatch} />
                <Redirect to="/home" />
            </Switch>
        </div>)
    }
}

export default withCookies(App);
