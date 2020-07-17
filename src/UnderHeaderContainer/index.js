import React from 'react';
import './index.css';
import NewStudentButton from './NewStudentButton';


function UnderHeaderContainer() {
    return (
        <div className="container">
            <label className="text-students-body">Студенты</label>
            <NewStudentButton />
        </div>
    );
}

export default UnderHeaderContainer;