import React from 'react';
import Form from './Form';
import './index.css';

export default function Content(props) {
    return (
        !props.isDefaultScreen
            ? <Form changeAvatar={props.changeAvatar}/>
            : null
    );
}