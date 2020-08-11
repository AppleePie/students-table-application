import React from 'react';
import NewStudentButton from './NewStudentButton';
import './index.css';


export default function UnderHeaderContainer(props) {
    const cond = window.outerWidth > 1024;
    const contStyle ={
        display: cond ? 'flex': 'grid',
        justifyContent: cond ? 'space-between' : null
    }
    return (
        props.isDefaultScreen 
            ? 
                <div className="student-button-container" style={{display: cond ? 'flex': 'grid', justifyContent: cond ? 'space-between' : null}}>
                    <span className="text-students-body">Студенты</span>
                    <NewStudentButton handleClick={props.handleClick}/>
                </div>
            :
                <div className="student-button-container">
                    <span className="text-students-body">Новый студент</span>
                </div>
    );
}