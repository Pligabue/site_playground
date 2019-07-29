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

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
        document.getElementById("form").reset();
    }

    render(){
        return(<div className="login">
            <form onSubmit={this.handleSubmit} id="form">
                <label htmlFor="user">Usuário:</label>
                <input type="text" name="user" id="user" onChange={this.handleChange}/>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" onChange={this.handleChange}/>
                <button>Login</button>
            </form>
        </div>)
    }
} export default Login