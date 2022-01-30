import React from "react";

import styles from './InputElement.module.css';

const InputElement = props => {
    const onChangeHandler = (event) => {
        console.log(event.target.value);
        {props.onAddItem(event.target.value);}
    };


    return (
        <div onChange={onChangeHandler}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} type={props.type} />
        </div>
    );
};

export default InputElement;
