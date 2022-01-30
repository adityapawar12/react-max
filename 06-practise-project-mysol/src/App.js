import React from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <UserForm />  
      <UserList />
    </div>
  );
}

export default App;
