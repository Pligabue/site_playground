import React from 'react';
import {Link} from "react-router-dom"

import "./SignUp.css"

class SignUp extends React.Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            email : "",
            user : "",
            password : "",
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit() {
        console.log(this.state)
    }

    render(){
        return(<div className="signUp">
            <label htmlFor="email">Nome:</label>
            <input type="email" name="email" ip="email"/>
            <label htmlFor="user">E-mail:</label>
            <input type="text" name="user" ip="user"/>
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" ip="password"/>
        </div>)
    }
} export default SignUp