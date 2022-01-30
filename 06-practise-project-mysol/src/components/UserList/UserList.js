import React, { useState } from 'react';

import ListElement from '../ListElement/ListElement';

import styles from './UserList.module.css';

const demo_users = [
    { name: 'aditya', age: '21' },
    { name: 'milind', age: '21' },
    { name: 'rahul', age: '21' },
    { name: 'rutik', age: '21' },
]

const UserList = () => {
    const [users, setUsers] = useState(demo_users); 

    return (
        <div className={styles['user-list']}>
            {users.map( user =>  
                <ListElement key={Math.random().toString()} name={user.name} age={user.age} />
            )}
        </div>
    );
};

export default UserList;
