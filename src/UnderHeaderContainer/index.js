import React from 'react';
import './index.css';


function UnderHeaderContainer() {
    return (
        <div className="container">
            <label className="text-students-body">Студенты</label>
            <button className="button-add-student">
                <div className="button-group-text-plus">
                    <img className="button-plus" src="./IMG/plus.svg" alt="plus.svg"/>
                    <label className="button-text">Добавить студента</label>
                </div>
            </button>
        </div>
    );
}

export default UnderHeaderContainer;