import React from 'react';
import axios from "axios"
import {Redirect} from 'react-router-dom'
import {url_v3} from "./App"


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

    handleSubmit(e) {
        const url = url_v3 + "/signup"
        axios.post(url, 
            {
                email : this.state.email,
                user : this.state.user,
                password : this.state.password,
            }
        ).then(response => {
            alert("Usuário cadastrado com sucesso.")
        }).catch(error => {
            alert("Erro ao cadastrar usuário. Tente novamente.")
        })    
    }

    render(){
        return(<div className="signUp">
            <h1 className="title">Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" ip="email" onChange={this.handleChange} />
                <label htmlFor="user">Usuário:</label>
                <input type="text" name="user" ip="user" onChange={this.handleChange} />
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" ip="password" onChange={this.handleChange} />
                <button>Sign Up</button>
            </form>
        </div>)
    }
} export default SignUp