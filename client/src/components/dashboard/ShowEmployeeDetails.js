import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class showEmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/employees/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showEmployeeDetails-API-response: " + res.data);
        this.setState({
          employee: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowEmployeeDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/employees/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowEmployeeDetails_deleteClick");
      })
  };


  render() {

    const employee = this.state.employee;
    let EmployeeItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ employee.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Email</td>
            <td>{ employee.email }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Address</td>
            <td>{ employee.address }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>City</td>
            <td>{ employee.city }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>State</td>
            <td>{ employee.state }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Zip</td>
            <td>{ employee.zip }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Phone</td>
            <td>{ employee.phone }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowEmployeeDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Employee List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Employee's Record</h1>
              <p className="lead text-center">
                  View Employee's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { EmployeeItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,employee._id)}>Delete Employee</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-employee/${employee._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Employee
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showEmployeeDetails;
