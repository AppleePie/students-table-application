import React from 'react';

function NewStudentButton() {
    return (
        <button className="button-add-student">
            <div className="button-group-text-plus">
                <img className="button-plus" src="/IMG/plus.svg" alt="plus.svg"/>
                <label className="button-text">Добавить студента</label>
            </div>
        </button>
    );
}

export default NewStudentButton;