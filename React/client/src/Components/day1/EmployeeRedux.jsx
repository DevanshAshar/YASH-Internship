import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeRedux = () => {
  const employees = useSelector((state) =>(state.formReducer.employees));
  return (
    <div>
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="2">No employees</td>
            </tr>
          ) : (
            employees.map(employee => (
              <tr key={employee.name}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRedux;
