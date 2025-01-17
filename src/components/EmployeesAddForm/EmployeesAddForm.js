import React, { Component } from "react";

import "./EmployeesAddForm.css";

export class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //каждый раз прихит разное name  ( name="name"  name="salary")
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.name === '' ||  this.state.salary === ''  ) {
            return alert("Please, input Name or Salary");
        } else {
            this.props.onAdd(this.state.name, this.state.salary);
        }
        
        this.setState({
            name: '',
            salary: ''
        })
    } 

    render() {
        const{name, salary} = this.state;
   
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"                    
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary over 1000?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit" 
                            className="btn btn-outline-light">Add</button>
                </form>
        </div>  
        );
    }
}