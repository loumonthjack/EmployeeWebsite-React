import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';
import { logoutUser } from "../../actions/authActions";
import {connect} from "react-redux";

class ShowEmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/employees')
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
    const { user } = this.props.auth;
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
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

ShowEmployeeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(ShowEmployeeList);
