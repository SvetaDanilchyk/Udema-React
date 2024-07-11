import React from "react";

import { EmployeesListItem } from "../EmployeesListItem";

import "./EmployeesList.css";

export const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}
