import React from 'react';
import {Link} from "react-router-dom"
import logo from "./logo_cachoeira.png"
import "./Header.css"

function LoggedStatus(props) {
    return props.isLoggedIn ? 
        (<div>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Log Out</Link>
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
            isLoggedIn: false,
            id: 0,
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
                    <LoggedStatus />
                </div>
            </div>

            <div className="border"></div>

            <div>
                <h1 className="nome">Cataratas do Iguaçu</h1>
            </div>
        </div>)
    }
} export default Header