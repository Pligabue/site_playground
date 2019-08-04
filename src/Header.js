import React from 'react';
import {Link, withRouter} from "react-router-dom"
import logo from "./logo_cachoeira.png"
import "./Header.css"

import {setUserData, getUserData, clearUserData} from "./Authentication"
import axios from 'axios';
import {url_v3} from "./App"

function logOut(props) {
    
    const url = url_v3 + "/logout"
    axios.post(url, {
        idusers: props.idusers
    }).then(response => {
        clearUserData()
        props.history.push("/home")
        window.location.reload();
    })
}

function LoggedStatus(props) {
    
    return props.isLoggedIn ? 
        (<div>
            <Link to="/profile">Profile</Link>
            <div className="link-button" >
                <button onClick={() => logOut(props)} idusers={props.idusers} history={props.history} >Log Out</button>
            </div>    
        </div>)
        : (<div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>)
}

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            idusers: this.props.idusers,
        }
    }

    render(){
        return(<div>
        
            <div className="header">
                <Link to="/home"><img src={logo} alt="Foto das cachoeiras" /></Link>
                <div className="navigation">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>
                <div className="navigationLogin">
                    <LoggedStatus isLoggedIn={this.state.isLoggedIn} idusers={this.state.idusers} history={this.props.history} />
                </div>
            </div>

            <div className="border" />

            <div>
                <h1 className="nome">Cataratas do Iguaçu</h1>
            </div>
        </div>)
    }
} export default withRouter(Header)