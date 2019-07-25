import React from 'react';
import {Link} from "react-router-dom"
import "./Home.css"

import foto1 from "./P_20190716_102243.jpg"

class Home extends React.Component {
    render(){
        return(<div>
            <h1>Bem-Vindo!</h1>
            <img src={foto1} alt="cachoeiras" id="foto1" />
        </div>)
    }
} export default Home