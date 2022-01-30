import React from "react";

import Button from "../UI/Button/Button";
import InputElement from "../UI/InputElement/InputElement";

import styles from './UserForm.module.css';

const UserForm = () => {
    const onSubmitHandler = (event) => {
        event.preventDefaults();
    };

    const onAddItem = (item) => {
        console.log(item);
    };

    return (
        <form onSubmit={onSubmitHandler} className={ styles['user-form'] }>
            <InputElement addItem={onAddItem} label="Username" type="text" />
            <InputElement label="Age (years)" type="number" />
            <Button /> 
        </form>
    );
};

export default UserForm;
