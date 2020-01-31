import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateEmployeeInfo extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/employees'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, employee: res.data})
        this.setState({
          name: res.data.name,
          email: res.data.email,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          zip: res.data.zip,
          phone: res.data.phone
        })
      })
      .catch(err => {
        console.log("Error from UpdateEmployeeInfo");
      })
  };

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
      .put('http://localhost:5000/api/employees/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/employee/show/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateEmployeeInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateEmployeeInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/employees" className="btn btn-outline-warning float-left">
                  Show Employee List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Employee</h1>
              <p className="lead text-center">
                  Update Employee's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="address">Address</label>
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
            <label htmlFor="city">City</label>
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
            <label htmlFor="state">State</label>
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
            <label htmlFor="zip">Zip</label>
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
              <label htmlFor="phone">Phone</label>
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
    );
  }
}

export default UpdateEmployeeInfo;
