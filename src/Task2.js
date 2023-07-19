import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import './Task2.css';

const Task2 = ({ circleCount }) => {
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://random-data-api.com/api/v2/users?size=${circleCount}`
        );

    
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Invalid API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    if (users.length === 0) {
      fetchUsers();
    }
  }, [circleCount, setUsers]);

  

  return (
    <div className="task2-container">
      <div className="user-cards">
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <div className="user-card">
              <img src={user.avatar} alt="Avatar" />
              <p>ID: {user.id}</p>
              <p>Name: {user.first_name} {user.last_name}</p>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>Phone Number: {user.phone_number}</p>
              <p>Title: {user.employment.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Task2;
