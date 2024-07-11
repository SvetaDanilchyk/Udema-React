import React from 'react';

//components
import { Info } from '../Info';
import { SearchPanel } from '../SearchPanel';
import { Filter } from '../Filter';
import { EmployeesList } from '../EmployeesList';
import { EmployeesAddForm } from '../EmployeesAddForm';

import './App.css';

export const App = () => {
  return (
    <div className="app">
        <Info/>

        <div className="search-panel">
            <SearchPanel/>
            <Filter/>
        </div>

        <EmployeesList/>
        <EmployeesAddForm/>
    </div>
  );
}

