import React from 'react';
import "./Login.css"

class Login extends React.Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
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

    render(){
        return(<div className="login">
            <label>
                Usuário:
                <input type="text" name="user" onChange={this.handleChange}/>
            </label>
            <label>
                Senha:
                <input type="password" name="password" onChange={this.handleChange}/>
            </label>
        </div>)
    }
} export default Login