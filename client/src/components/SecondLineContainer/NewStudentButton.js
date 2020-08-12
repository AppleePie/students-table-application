import React from 'react';

export default function NewStudentButton(props) {
    return (
        <button className="button-add-student" onClick={() => props.handleClick(false)}>
            <div className='button-text-container'>
                <img className="button-plus" src="/IMG/plus.svg" alt="Плюсик"/>
                <span>Добавить студента</span>
            </div>
        </button>
    );
}