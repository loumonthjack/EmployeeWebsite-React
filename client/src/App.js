import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateEmployee from './components/CreateEmployee';
import ShowEmployeeList from './components/ShowEmployeeList';
import ShowEmployeeDetails from './components/ShowEmployeeDetails';
import UpdateEmployeeInfo from './components/UpdateEmployeeInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowEmployeeList} />
          <Route path='/create-employee' component={CreateEmployee} />
          <Route path='/edit-employee/:id' component={UpdateEmployeeInfo} />
          <Route path='/show-employee/:id' component={ShowEmployeeDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
