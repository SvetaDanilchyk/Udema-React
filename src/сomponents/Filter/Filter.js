import React from "react";

import "./Filter.css";

export const Filter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                        All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                        Up for promotion
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                        Salary over 1000
            </button>
        </div>
    );
};