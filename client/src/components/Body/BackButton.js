import React from 'react';

export default function BackButton(props) {
    return (
        !props.isDefaultScreen 
            ? 
                <div>
                    <button id="back" className="button-back" onClick={() => props.handleClick(true)}>
                        <img src='/IMG/arrow.svg' alt="arrow.svg"/>
                        <label>НАЗАД К СПИСКУ СТУДЕНТОВ</label>
                    </button>
                </div>
            : null
        );
}