import React from "react";

import "./App.css";

const WhoAmI = ({name, surname,link}) => {
    return (
        <div>
            <h1>My name is {name.firstName} , surname - {surname} </h1>
            {/* <h1>My name is {name.firstName} , surname - {surname} </h1>
            <h1>My name is {name()} , surname - {surname} </h1> */}
            <a href={link}>My profile</a>
        </div>
    );
}

export const App = () => {
    return (
        <div className="App">
            <WhoAmI name="Jhon" surname="Smith" link="#"/>{/* 
            <WhoAmI name={{firstName: "David"}} surname="Smith" link="#"/>
            <WhoAmI name={() => {return 'Kim'}} surname="Smith" link="#"/> */}
        </div>
    );
}