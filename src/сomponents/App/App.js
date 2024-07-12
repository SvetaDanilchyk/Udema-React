import React from 'react';

//components
import { Info } from '../Info';
import { SearchPanel } from '../SearchPanel';
import { Filter } from '../Filter';
import { EmployeesList } from '../EmployeesList';
import { EmployeesAddForm } from '../EmployeesAddForm';

import './App.css';

export const App = () => {

    
  const data = [
    {
      id:1,
      name:"Jon S",
      salary: 800
    },
    {
      id:2,
      name:"David K",
      salary: 1500
    },
    {
      id:3,
      name:"Kate Z",
      salary: 1000
    }
  ];

  
  return (
    <div className="app">
        <Info/>

        <div className="search-panel">
            <SearchPanel/>
            <Filter/>
        </div>

        <EmployeesList data = {data}/>
        <EmployeesAddForm/>
    </div>
  );
}

