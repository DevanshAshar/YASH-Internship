import React, { useState, useEffect } from 'react';

const EmployeeCRUD = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        salary: '',
        age: ''
    });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
            const data = await response.json();
            setEmployees(data.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreate = async () => {
        try {
            const response = await fetch('http://dummy.restapiexample.com/api/v1/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('New employee created:', data);
            fetchEmployees();
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log('Employee deleted:', data);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div>
            <h2>Create Employee</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Salary:</label>
                <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <button onClick={handleCreate}>Create</button>

            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_salary}</td>
                            <td>{employee.employee_age}</td>
                            <td><button onClick={() => handleDelete(employee.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeCRUD;
