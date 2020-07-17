import React from 'react';
import './index.css';
import NewStudentButton from './NewStudentButton';


function UnderHeaderContainer(props) {
    return (
        <div className="container">
            <label className="text-students-body">Студенты</label>
            <NewStudentButton handleClick={props.handleClick}/>
        </div>
    );
}

export default UnderHeaderContainer;