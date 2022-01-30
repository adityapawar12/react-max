import React from 'react';

import styles from './ListElement.module.css';

const ListElement = (props) => {
    return (
        <p className={styles['list-element']} >{props.name} ({props.age} years old)</p>
    );
};

export default ListElement;
