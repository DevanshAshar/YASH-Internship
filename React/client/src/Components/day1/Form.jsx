import React, { useState } from 'react';

const Form= () => {
    const [formData, setFormData] = useState({ name: '', dob: '', gender: '' });
    const [userList, setUserList] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUserList([...userList, formData]);
        setFormData({ name: '', dob: '', gender: '' });
    };

    const handleDelete = id => {
        console.log('Deleted ID:', id);
        setUserList(prevList => prevList.filter((user, index) => index !== id));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit">Add User</button>
            </form>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.dob}</td>
                            <td>{user.gender}</td>
                            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Form;
