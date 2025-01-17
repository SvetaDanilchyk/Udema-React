import React from "react";

import { EmployeesListItem } from "../EmployeesListItem";

import "./EmployeesList.css";

export const EmployeesList = ({data, onDelete, onToggleProp}) => {
    
    return (
        <ul className="app-list list-group">
            {
                data.map(item => {
                    const {id, ...itemProps} = item;
                    return (<EmployeesListItem 
                                key={id} 
                                {...itemProps}
                                onDelete={() => onDelete(id)}
                                onToggleProp = {(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}
                        />)
            })
            }
        </ul>
    );
}
