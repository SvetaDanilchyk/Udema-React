import React, { Component } from "react";

import "./App.css";

class WhoAmI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            years: 27
        }

        this.nextYear = this.nextYear.bind(this);
    }

    nextYear = () => {
        this.setState({
            years: this.state.years +1 
        })
    }
    
    render () {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h2>My name is {name.firstName} , surname - {surname}, age - {this.state.years} </h2>
                {/* <h1>My name is {name.firstName} , surname - {surname} </h1>
                <h1>My name is {name()} , surname - {surname} </h1> */}
                <a href={link}>My profile</a>
            </div>
        );
    }
}

export const App = () => {
    return (
        <div className="App">
            <WhoAmI name="Jhon" surname="Smith" link="#"/>
            <WhoAmI name="Alex" surname="Smith" link="#"/>{/* 
            <WhoAmI name={{firstName: "David"}} surname="Smith" link="#"/>
            <WhoAmI name={() => {return 'Kim'}} surname="Smith" link="#"/> */}
        </div>
    );
}