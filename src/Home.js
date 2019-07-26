import React from 'react';
import "./Home.css"

import foto1 from "./P_20190716_102243.jpg"

class Home extends React.Component {

    render(){
        return(<div>
            <h1 className="title">Bem-Vindo!</h1>
            <p id="description1">Aqui encontramos uma foto do rio Iguaçu, logo antes da queda da Garganta do Diabo, no território argentino.</p>
            <img src={foto1} alt="cachoeiras" id="foto1" />
        </div>)
    }
} export default Home