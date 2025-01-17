import React from "react";

import "./SearchPanel.css";

export class  SearchPanel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearchInp = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        
        return (
            <input 
                value={this.state.term}
                onChange={this.onUpdateSearchInp}
                type="text" 
                className="form-control search-input"
                placeholder="Find an employee"/>
        );
    }
   
};