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

function buildOnClick(onClickFunction, state, handleSubmitUsername, handleSubmitEmail) {
    console.log("State is ", state)
    let containerUser = document.getElementById("username")
    let userButton = document.getElementById("username-edit-button")
    userButton.onclick = () => {
        containerUser.innerHTML = ""
        let inputUser = document.createElement("input")
        inputUser.type = "text"
        inputUser.name = "username"
        inputUser.defaultValue = state.username
        inputUser.onchange = onClickFunction
        containerUser.appendChild(inputUser)
        
        userButton.innerHTML = "Salvar"
        userButton.onclick = handleSubmitUsername
        document.getElementById("email-edit").innerHTML = ""
    }

    let containerEmail = document.getElementById("email")
    let emailButton = document.getElementById("email-edit-button")
    emailButton.onclick = () => {
        containerEmail.innerHTML = ""
        let inputEmail = document.createElement("input")
        inputEmail.type = "text"
        inputEmail.name = "email"
        inputEmail.defaultValue = state.email
        inputEmail.onchange = onClickFunction
        containerEmail.appendChild(inputEmail)

        emailButton.innerHTML = "Salvar"
        emailButton.onclick = handleSubmitEmail
        document.getElementById("username-edit").innerHTML = ""
    }
}

class Profile extends React.Component {

    constructor(props) {
        super(props)
        console.log("PROFILE PROPS: ", props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitUsername = this.handleSubmitUsername.bind(this)
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this)

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
        }).finally(() => {
            if (this.state.idusers === Number(this.props.match.params.idusers)) {
                builtButton()
                buildOnClick(this.handleChange, this.state, this.handleSubmitUsername, this.handleSubmitEmail)
            }
        })
    }

    handleChange(e) {
        console.log("e.target.value ", e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleSubmitUsername() {
        let url = url_v3 + "/edit/username"
        axios.put(url, {
            username: this.state.username,
            idusers: this.state.idusers
        }).catch(() => {
            alert("Erro ao atualizar o nome de usuário.")
        }).finally(() => {
            window.location.reload()
        })
    }

    handleSubmitEmail() {
        let url = url_v3 + "/edit/email"
        axios.put(url, {
            email: this.state.email,
            idusers: this.state.idusers
        }).catch(() => {
            alert("Erro ao atualizar o e-mail do usuário.")
        }).finally(() => {
            window.location.reload()
        })
    }

    render(){
        return(<div className="profile" id="profile">
            <h1 className="title">Perfil</h1>
            

            <div className="divTable">
                <div className="divTableRow">
                    <div className="divTableCell left">
                        <p><strong>Usuário</strong>: </p>
                    </div>
                    <div className="divTableCell middle" id="username" />
                    <div className="divTableCell edit" id="username-edit" />
                </div>
                <div className="divTableRow">
                    <div className="divTableCell left">
                        <p><strong>E-mail</strong>: </p>
                    </div>
                    <div className="divTableCell middle" id="email" />
                    <div className="divTableCell edit" id="email-edit" />
                </div>
            </div>

        </div>)
    }
} export default withRouter(Profile)