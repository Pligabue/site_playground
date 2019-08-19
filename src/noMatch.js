import React from 'react';
import {Link} from "react-router-dom"


class NoMatch extends React.Component {

    render(){
        return(<div className="noMatch">
            <h1 className="title">Error 404: Page not found</h1>
        </div>)
    }
} export default NoMatch