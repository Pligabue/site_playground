import React from 'react';
import {Link, withRouter} from "react-router-dom"
import "./Profile.css"

import {url_v3} from "./App" 
import axios from 'axios';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: ""
        }

        const url = url_v3 + "/profile/" + props.match.params.idusers
        axios.get(url).then(response => {
            var container = document.getElementById("profile")
            
            var username = document.getElementById("username")
            username.innerHTML += response.data.username
            container.appendChild(username)
            
            var email = document.getElementById("email")
            email.innerHTML += response.data.email
            container.appendChild(email)

        }).catch((error) => {
            alert("ERRO NO CARREGAMENTO")
        })
    }



    render(){
        return(<div className="profile" id="profile">
            <h1 className="title">Perfil</h1>
            <p id="username"><strong>Usuário</strong>: </p>
            <p id="email"><strong>E-mail</strong>: </p>
        </div>)
    }
} export default withRouter(Profile)