import React, { Component } from "react";

import "./App.css";

class WhoAmI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }

        this.nextYear = this.nextYear.bind(this);
    }

    nextYear = () => {
        this.setState(state => ({                   
            years: state.years +1 
        }))
    }

    commitInputChanges = (event, color) => {
        console.log(color);
        this.setState({
            position: event.target.value
        });
   }
    
    render () {
        const {name, surname, link} = this.props;
        const {years, position} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h2>My name is {name.firstName} , 
                        surname - {surname}, 
                        age - {years}, 
                        position - {position} </h2>
                {/* <h1>My name is {name.firstName} , surname - {surname} </h1>
                <h1>My name is {name()} , surname - {surname} </h1> */}
                <a href={link}>My profile</a>

                <form>
                    <span>Enter position</span>
                    <input type="text" onChange={(e) => {this.commitInputChanges(e, 'some color')}}/>
                </form>
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