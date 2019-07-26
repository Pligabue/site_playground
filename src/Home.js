import React from 'react';
import "./Home.css"

import foto1 from "./P_20190716_102243.jpg"
import foto2 from "./P_20190717_144755.jpg"
import foto3 from "./P_20190717_145428.jpg"

class Home extends React.Component {

    render(){
        return(<div>
            <h1 className="title">Bem-Vindo!</h1>
            <div id="description1">
                <p>
                    Aqui encontramos uma{'\n'}
                    foto do rio Iguaçu, logo{'\n'}
                    antes da queda da{'\n'}
                    Garganta do Diabo, no{'\n'}
                    território argentino.
                </p>
            </div>
            <img src={foto1} alt="cachoeiras" id="foto1" />
            <div id="description2">
                <p>
                    Essa é uma imagem das cataratas argentinas, vistas do parque no Brasil. Por mais que o parque argentino seja mais extenso, a vista do lado brasileiro não deixa a desejar.
                </p>
            </div>
            <img src={foto2} alt="cachoeiras" id="foto2" />
            <img src={foto3} alt="cachoeiras" id="foto3" />
        </div>)
    }
} export default Home