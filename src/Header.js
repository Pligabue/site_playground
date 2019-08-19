import React from 'react';
import {Link, withRouter} from "react-router-dom"
import logo from "./logo_cachoeira.png"
import "./Header.css"

function logOut(props) {
    const { cookies } = props
    cookies.remove("idusersPL")
    cookies.remove("tokenPL")
    window.setTimeout(() => {
        window.location.assign("/home");
    }, 500)
}

function LoggedStatus(props) {
    
    return props.isLoggedIn ? 
        (<div>
            <Link to={"/profile/" + props.idusers}>Profile</Link>
            <div className="link-button" >
                <button onClick={() => logOut(props)} >Log Out</button>
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
                    <Link to="/posts/page/1">Posts</Link>
                </div>
                <div className="navigationLogin">
                    <LoggedStatus {...this.props} />
                </div>
            </div>

            <div className="border" />

            <div>
                <h1 className="nome">Cataratas do Iguaçu</h1>
            </div>
        </div>)
    }
} export default withRouter(Header)