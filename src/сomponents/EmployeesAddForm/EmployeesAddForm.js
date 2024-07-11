import React from "react";

import "./EmployeesAddForm.css";

export const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary over 1000?" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
    </div>  
    );
}