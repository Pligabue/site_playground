import React from 'react';
import {Link} from "react-router-dom"
import logo from "./logo_cachoeira.png"
import "./Header.css"

class Header extends React.Component {
    render(){
        return(<div>
        
            <div className="header">
                
                <Link to="/home"><img src={logo} alt="Foto das cachoeiras" /></Link>
                <div className="navigation">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>
                <div className="login">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>

            <div className="border"></div>

            <div>
                <h1 className="nome">Cataratas do Iguaçu</h1>
            </div>
        </div>)
    }
} export default Header