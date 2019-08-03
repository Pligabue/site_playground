import React from 'react';
import {withRouter} from 'react-router-dom'
import "./Login.css"
import axios from 'axios';

import {url_v3} from "./App"
import {getUserData, setUserData, clearUserData} from "./Authentication"

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            email : "",
            password : "",
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const url = url_v3 + "/login"
        axios.post(url, {
            email: this.state.email,
            password: this.state.password    
        }).then(response => {
            if (!response.data.idusers || !response.data.token) {
                clearUserData()
            } else {
                console.log("LOGIN RESPONSE: ", response.data)
                setUserData(response.data.idusers, response.data.token)
                window.location.assign("/home")
            }
        }).catch(response => {
            console.log("ERRO NO LOGIN")
        })
    }

    render(){
        return(<div className="login">
            <h1 className="title">Log In</h1>
            <form onSubmit={this.handleSubmit} id="form">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" onChange={this.handleChange}/>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" onChange={this.handleChange}/>
                <button>Login</button>
            </form>
        </div>)
    }
} export default withRouter(Login)