import React from 'react';
import "./Login.css"

class Login extends React.Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
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
        return(<div className="login">
            <label htmlFor="user">Usuário:</label>
            <input type="text" name="user" id="user" onChange={this.handleChange}/>
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" onChange={this.handleChange}/>
            <button onSubmit={this.handleSubmit}>Login</button>
        </div>)
    }
} export default Login