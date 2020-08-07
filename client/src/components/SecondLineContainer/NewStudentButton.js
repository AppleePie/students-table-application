import React from 'react';

export default function NewStudentButton(props) {
    return (
        <button className="button-add-student" onClick={() => props.handleClick(false)}>
            <img className="button-plus" src="/IMG/plus.svg" alt="Плюсик"/>
            <span>Добавить студента</span>
        </button>
    );
}