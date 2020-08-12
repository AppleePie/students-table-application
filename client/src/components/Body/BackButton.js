import React from 'react';

export default function BackButton(props) {
    return (
        !props.isDefaultScreen 
            ? 
                <button className="button-back" onClick={() => props.handleClick(true)}>
                    <img src='/IMG/arrow.svg' alt="стрелочка"/>
                    <span>НАЗАД К СПИСКУ СТУДЕНТОВ</span>
                </button>
            : null
        );
}