import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const EmployeeCard = (props) => {
    const  employee  = props.employee;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-employee/${employee._id}`}>
                        { employee.name }
                    </Link>
                </h2>
                <h3>{employee.email}</h3>
                <p>{employee.phone}</p>
            </div>
        </div>
    )
};

export default EmployeeCard;