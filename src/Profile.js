import React from 'react';
import {Link, withRouter} from "react-router-dom"
import "./Profile.css"

import {url_v3} from "./App" 
import axios from 'axios';

function builtButton() {
    let containerUser = document.getElementById("username-edit")
    let userEdit = document.createElement("button")
    userEdit.innerHTML = "Editar"
    userEdit.id = "username-edit-button"
    containerUser.appendChild(userEdit)

    let containerEmail = document.getElementById("email-edit")
    let emailEdit = document.createElement("button")
    emailEdit.innerHTML = "Editar"
    emailEdit.id = "email-edit-button"
    containerEmail.appendChild(emailEdit)
}

function buildOnClick(handleChange) {
    console.log(handleChange)
    let containerUser = document.getElementById("username-edit")
    let userButton = document.getElementById("username-edit-button")
    userButton.onclick = () => {
        containerUser.removeChild(userButton)
        let inputUser = document.createElement("input")
        inputUser.type = "text"
        inputUser.name = "username"
        inputUser.defaultValue = document.getElementById("username").innerHTML.slice(26)
        inputUser.onkeypress = handleChange
        containerUser.appendChild(inputUser)
    }

    let containerEmail = document.getElementById("email-edit")
    let emailButton = document.getElementById("email-edit-button")
    emailButton.onclick = () => {
        containerEmail.removeChild(emailButton)
        let inputEmail = document.createElement("input")
        inputEmail.type = "text"
        inputEmail.name = "email"
        inputEmail.defaultValue = document.getElementById("email").innerHTML.slice(25)
        inputEmail.onkeypress = handleChange
        containerEmail.appendChild(inputEmail)
    }
}

class Profile extends React.Component {

    constructor(props) {
        super(props)
        console.log("PROFILE PROPS: ", props)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            idusers: this.props.idusers,
            token: this.props.token,
            isLoggedIn: this.props.isLoggedIn,
            username: "",
            email: "",
        }
        
        
    }

    componentDidMount() {
        const url = url_v3 + "/profile/" + this.props.match.params.idusers
        axios.get(url).then(response => {
            
            this.setState({
                username: response.data.username,
                email: response.data.email
            })

            var username = document.getElementById("username")
            username.innerHTML += response.data.username
            
            var email = document.getElementById("email")
            email.innerHTML += response.data.email

        }).catch((error) => {
            alert("ERRO NO CARREGAMENTO\n", error)
        })

        if (this.state.idusers === Number(this.props.match.params.idusers)) {
            builtButton()
            buildOnClick(this.handleChange)
        }


    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    render(){
        return(<div className="profile" id="profile">
            <h1 className="title">Perfil</h1>
            <div id="username-edit" className="edit" />
            <p id="username"><strong>Usuário</strong>: </p>
            <div id="email-edit" className="edit" />
            <p id="email"><strong>E-mail</strong>: </p>
        </div>)
    }
} export default withRouter(Profile)