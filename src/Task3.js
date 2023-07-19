import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import './Task3.css';

const Task3 = () => {
  const { userId } = useParams();
  const { users } = useContext(UserContext);

  const selectedUser = users.find((user) => user.id === Number(userId));

  return (
    <div className="task3-container">
      {selectedUser ? (
        <div className="user-details">
          <img src={selectedUser.avatar} alt="Avatar" />
          <p>ID: {selectedUser.id}</p>
          <p>Name: {selectedUser.first_name} {selectedUser.last_name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Gender: {selectedUser.gender}</p>
          <p>Phone Number: {selectedUser.phone_number}</p>
          <p>Title: {selectedUser.employment.title}</p>
        </div>
      ) : (
        <p>User not found!</p>
      )}
    </div>
  );
};

export default Task3;
