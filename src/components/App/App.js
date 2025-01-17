import React, { Component } from 'react';

//components
import { Info } from '../Info';
import { SearchPanel } from '../SearchPanel';
import { Filter } from '../Filter';
import { EmployeesList } from '../EmployeesList';
import { EmployeesAddForm } from '../EmployeesAddForm';

import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:  [
        {
          id:1,
          name:"Jon S",
          salary: 800,
          increase: false,
          rise: false
         
        },
        {
          id:2,
          name:"David K",
          salary: 1500,
          increase: false,
          rise: true
          
        },
        {
          id:3,
          name:"Kate Z",
          salary: 1000,
          increase: false,
          rise: false
          
        }
      ],
      term: '',
      visibleFilter: [],
      filter: '',
    };
   this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        return {
        data: data.filter(item => item.id !==id )
      } 
    })
  }

  addEmploye = (name, salary) => {
    let newEmploye = {
      id: this.maxId++,
      name: name,
      salary: salary,
      increase: false,
      rise: false
      
    }

    this.setState(({data}) => {
      const newArr = [...data, newEmploye]; 
      return {
        data: newArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map((elem) => { 
        if (elem.id === id) { 
          return {...elem, [prop]: !elem[prop]}
        }
        return elem;        
      })
    }));    
  }

  searchEmp = (item, term) => {
      if (term.length === 0) {
        return item;
      }

       return item.filter(item => {
        return item.name.indexOf(term) > -1
      }) 
  };

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch(filter){
      case 'rise':
        return  items.filter(item => item.rise);
      case'moreThen1000':
        return  items.filter(item => item.salary >= 1000);
      default:
        return items;
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({filter});
  }  
  
  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(elem => elem.increase).length;
    const visibleData = this.filterPost( this.searchEmp(data, term), filter);

    return (
      <div className='app'>
        <Info 
         employees = {employees}
         increased = {increased}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <Filter onUpdateFilter = {this.onUpdateFilter}/>
        </div>  
        <EmployeesList 
        data={visibleData}
        onDelete={this.deleteItem}
        onToggleProp = {this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addEmploye}/>
      </div>
    );
  }
}
