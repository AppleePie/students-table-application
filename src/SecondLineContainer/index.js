import React from 'react';
import './index.css';
import NewStudentButton from './NewStudentButton';


export default function UnderHeaderContainer(props) {
    return (
        props.isDefaultScreen 
            ? 
                <div className="container">
                <label className="text-students-body">Студенты</label>
                <NewStudentButton handleClick={props.handleClick}/>
                </div>
            :
                <div className="container">
                    <label className="text-students-body">Новый студент</label>
                </div>
    );
}