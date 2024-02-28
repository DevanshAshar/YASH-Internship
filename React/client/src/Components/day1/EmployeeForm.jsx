import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../service/actions/actions';
const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setFormData({
      name: '',
      age: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      <br />
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
