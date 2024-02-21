import React, { useState, useEffect } from 'react';

const Employee = () => {
    const [state, setState] = useState({
        type: 'employee',
        data: [],
        update: true
    });

    const [photosState, setPhotosState] = useState({
        type: 'photos',
        data: []
    });

    const [displayPhotos, setDisplayPhotos] = useState(false); 

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
                const data = await response.json();
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    update: false
                }));
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        if (state.update) {
            fetchEmployees();
        }
    }, [state.update]);

    const fetchPhotos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            setPhotosState({
                type: 'photos',
                data: data
            });
            setDisplayPhotos(true);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    const handleToggle = () => {
        if (displayPhotos) {
            setDisplayPhotos(false); 
        } else {
            fetchPhotos(); 
        }
    };

    const handleRestrictToggle = () => {
        setState(prevState => ({
            ...prevState,
            update: false
        }));
    };

    return (
        <div>
            <h2>Employees</h2>
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleRestrictToggle}>Restrict Toggle</button>
            {(!displayPhotos && state.type === 'employee') && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.data.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employee_name}</td>
                                <td>{employee.employee_age}</td>
                                <td>{employee.employee_salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {displayPhotos && (
                <div>
                    {photosState.data.map(photo => (
                        <div key={photo.id}>
                            <img src={photo.url} alt={photo.title} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Employee;
