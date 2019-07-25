import React from 'react';
import {Link} from "react-router-dom"
import logo from "./output-onlinepngtools.png"
import "./Header.css"

class Header extends React.Component {
    render(){
        console.log(logo)
        return(<div className="header">
            <div className="logo"> 
                <Link to="/home"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navigation">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>)
    }
} export default Header