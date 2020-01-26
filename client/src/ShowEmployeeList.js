import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

class ShowEmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/employees')
      .then(res => {
        this.setState({
          employees: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowEmployeeList');
      })
  };


  render() {
    const employees = this.state.employees;
    console.log("PrintEmployee: " + employees);
    let employeeList;

    if(!employees) {
      employeeList = "there is no employee recored!";
    } else {
      employeeList = employees.map((employee, k) =>
        <EmployeeCard employee={employee} key={k} />
      );
    }

    return (
      <div className="ShowEmployeeList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Employees List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-employee" className="btn btn-outline-warning float-right">
                + Add New Employee
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {employeeList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowEmployeeList;
