import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      phone:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    };

    axios
      .post('http://localhost:8082/api/employees', data)
      .then(res => {
        this.setState({
          name: '',
          email:'',
          address:'',
          city:'',
          state:'',
          zip:'',
          phone:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateEmployee!");
      })
  };

  render() {
    return (
      <div className="CreateEmployee">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Employee List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Employee</h1>
              <p className="lead text-center">
                  Create new employee
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                      type='text'
                      placeholder='State'
                      name='state'
                      className='form-control'
                      value={this.state.state}
                      onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='City'
                    name='city'
                    className='form-control'
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Zip'
                    name='zip'
                    className='form-control'
                    value={this.state.zip}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                      type='number'
                      placeholder='Phone'
                      name='phone'
                      className='form-control'
                      value={this.state.phone}
                      onChange={this.onChange}
                  />
                </div>
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployee;
