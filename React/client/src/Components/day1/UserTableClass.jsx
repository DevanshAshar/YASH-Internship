import React, { Component } from 'react';
import users from'./users'
class UserTableClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTableClass;

