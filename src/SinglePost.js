import React from 'react';
import axios from "axios"

import { url_v3 } from "./App";


class SinglePost extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            idposts: this.props.match.params.idposts
        }
        console.log(this.state)
    }

    componentDidMount() {
        const post = document.getElementById("post")
        const url = url_v3 + "/posts/id/" + this.state.idposts
        axios.get(url)
        .then(response => {
            let data = response.data

            const title = document.createElement("h1")
            title.innerHTML = data.title
            title.className = "title"
            post.appendChild(title)

            const username = document.createElement("h2")
            username.innerHTML = "Por " + data.username
            post.appendChild(username)

            const time = document.createElement("h3")
            time.innerHTML = data.time
            post.appendChild(time)

            const text = document.createElement("p")
            text.innerHTML = data.text
            post.appendChild(text)
            
        })
    }

    render(){
        return(<div id="post" className="posts" />)
    }

} export default SinglePost