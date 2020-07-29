import React from 'react';
import Form from './Form';
import Table from './Table';
import './index.css';

export default function Content(props) {
    return (
        props.isDefaultScreen
            ? <Table />
            : <Form changeAvatar={props.changeAvatar}/>
    );
}