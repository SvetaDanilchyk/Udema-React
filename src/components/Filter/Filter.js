import React from "react";

import "./Filter.css";

export const Filter = (props) =>  {
   
    const buttonData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'All employees'},
        {name: 'moreThen1000', label: 'All employees'},
    ];

    const buttonvVisable = buttonData.map(({name, label}) => {

        const active = props.filter === name;
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';

        return (
            <button 
            key={name}
            onClick={() => props.onUpdateFilter(name)}
            className={`btn ${clazz}`}
            type="button"> {label} </button>
        )
        }); 
        return (
            <div className="btn-group">
                {buttonvVisable}
            </div>
        );
};