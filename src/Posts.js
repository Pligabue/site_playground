import React from 'react';
import {Link} from "react-router-dom"
import axios from "axios"

import "./Posts.css"
import { url_v3 } from "./App"

function getDate() {

    let date = new Date()
    let year = date.getUTCFullYear().toString()
    let month = (date.getUTCMonth() + 1).toString()
    let day = date.getUTCDate().toString()
    let hours = date.getUTCHours().toString()
    let minutes = date.getUTCMinutes().toString()
    let seconds = date.getUTCSeconds().toString()
    
    return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds
}

class Posts extends React.Component {

    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            idusers: this.props.idusers,
            isLoggedIn: this.props.isLoggedIn,
            title: "",
            text: "",
            perPage: 4,
        }
        
    }

    componentDidMount() {

        if (document.getElementById("text") != null) {   
            const textarea = document.getElementById("text")
            textarea.rows = "1"
            this.lineHeight = textarea.scrollHeight
            textarea.rows = "2"
        }

        const posts = document.getElementById("posts")
        const url = url_v3 + "/posts/page/1/" + this.state.perPage
        axios.get(url)
        .then(response => {
            for (let post of response.data) {
                console.log(post)
                const container = document.createElement("div")

                const border = document.createElement("div")
                border.className = "postBorder"
                container.appendChild(border)

                const title = document.createElement("a")
                title.innerHTML = post.title
                title.href = "/posts/id/" + (post.idposts).toString()
                container.appendChild(title)

                const username = document.createElement("h2")
                username.innerHTML = "Por " + post.username
                container.appendChild(username)

                const time = document.createElement("h3")
                time.innerHTML = post.time
                container.appendChild(time)

                const text = document.createElement("p")
                text.innerHTML = post.text
                container.appendChild(text)

                posts.appendChild(container)
            }
        })
    }
    

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })

        if (e.target.name === "text") {
            const textarea = document.getElementById("text")
            textarea.rows = "1"
            textarea.rows = (1 + textarea.scrollHeight/this.lineHeight).toFixed()
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const url = url_v3 + "/posts/set"
        const config = {
            withCredentials: true
        }
        axios.post(url, {
            title: this.state.title,
            text: this.state.text,
            time: getDate()   
        }, config)
        .then(response => {
            window.location.reload()
        }).catch(error => {
            alert("Algo deu errado: ", error)
        })
    }

    render(){
        return(<div className="posts">
            <h1 className="title" id="mainTitle">Posts</h1>
            {this.state.isLoggedIn && <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Título" maxLength="120" id="title" onChange={this.handleChange} />
                    <textarea name="text" placeholder="Escreva aqui" maxLength="10000" id="text" onChange={this.handleChange} />
                    <button>Postar</button>
                </form>
            </div>}
            <div id="posts" />
        </div>)
    }
} export default Posts