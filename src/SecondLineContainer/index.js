import React from 'react';
import './index.css';
import NewStudentButton from './NewStudentButton';


function UnderHeaderContainer(props) {
    return (
        props.isDefault 
            ? 
                <div className="container">
                <label className="text-students-body">Студенты</label>
                <NewStudentButton handleClick={props.handleClick}/>
                </div>
            :
                <div>
                    <div className="container">
                        <label className="text-students-body">Новый студент</label>
                    </div>
                </div>
    );
}

export default UnderHeaderContainer;