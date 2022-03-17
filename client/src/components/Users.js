import React, { useState, useEffect } from 'react';
import DeleteUser from './DeleteUser';

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

const Users = () => {
  // ===== H O O K S ==============
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  // ===== HANDEL SUBMIT EVENT HANDLER ==============
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    //users is an array of user objects
    setUsers([...users, newUser]);
  };

  // ===== DELETE USERS ==============
  const deleteUser = (deleteId) => {
    //sets newUsers to filter through users id, if the id is not the deleteId then add to the newUsers list
    const newUsers = users.filter((i) => i.id !== deleteId);
    setUsers(newUsers);
  };

  // ===== GET : GET USERS ==============
  const getUsers = () => {
    fetch('http://localhost:4444/users')
      .then((response) => response.json())
      .then((response) => setUsers(response.users));
  };

  // ===== POST - ADD USER  ==============
  const addUser = (newUser) => {
    fetch('http://localhost:4444/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then(() => {
      console.log(`Added ${newUser}`);
    });
  };
  // ====== useEffect HOOK =====
  useEffect(() => {
    getUsers();
    addUser();
  }, []);

  return (
    <section className='user-management'>
      <h2>User Management</h2>
      <ul id='users-list'>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
      {/* display all existing Users above <li>...</li>{' '} */}
      <div>
        <h3>Add User</h3>
        <form id='add-user' action='#' onSubmit={handleSubmit}>
          {/* ADDING NAME */} {/* Add more form fields here */}
          <fieldset>
            <label>Name</label>
            <input
              type='text'
              id='add-user-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              type='text'
              id='add-user-email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Your-Id</label>
            <input
              type='number'
              id='add-user-id'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </fieldset>
          <input type='submit' value='Add' />
        </form>
      </div>
      {/* DELETING NAME */}
      <div>
        <DeleteUser deleteUser={deleteUser} />
      </div>
    </section>
  );
};

export default Users;
