import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from 'react';
import { REACT_APP_BASE_URL } from '~/constants/config';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(REACT_APP_BASE_URL + 'users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <Table striped bordered hover bgcolor="white">
      <thead>
        <tr>
          <th>STT</th>
          <th>Avatar</th>
          <th>Email</th>
          <th>Joined</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.user_id}>
            <td>{index}</td>
            <td><img src={user.pic} alt={user.name} /></td>
            <td>{user.email}</td>
            <td>{user.joined_date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
