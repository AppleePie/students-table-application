import React from 'react';
import Form from './Form';
import Table from './Table';
import '../Geometria/stylesheet.css';
import './index.css';

export default function Content(props) {
    return (
        props.isDefaultScreen
            ? <Table />
            : <Form handleClick={props.handleClick} changeAvatar={props.changeAvatar}/>
    );
}