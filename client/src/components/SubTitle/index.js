import React from 'react';
import NewStudentButton from './NewStudentButton';
import './index.css';


export default function SubTitle(props) {
    return (
        props.isDefaultScreen 
            ? 
                <div className="student-button-container" style={{margin: '67px'}}>
                    <span className="text-students-body">Студенты</span>
                    <NewStudentButton handleClick={props.handleClick}/>
                </div>
            :
                <div className="student-button-container">
                    <span className="text-students-body">Новый студент</span>
                </div>
    );
}