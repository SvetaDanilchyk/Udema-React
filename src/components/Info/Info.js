import React from "react";

import "./Info.css";

export const Info = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in the company</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Bonus will be received: {increased} </h2>
        </div>
    )
};