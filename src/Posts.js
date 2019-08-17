import React from 'react';
import {Link} from "react-router-dom"

import "./Posts.css"

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
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(<div className="posts">
            <h1 className="title">Posts</h1>
            {this.state.isLoggedIn && <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Título" maxlength="120" id="title" />
                    <input type="text" name="text" placeholder="Escreva aqui" maxlength="120" id="text" />
                    <button>Postar</button>
                </form>
            </div>}
            <div id="posts" />
        </div>)
    }
} export default Posts