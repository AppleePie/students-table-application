import React from 'react';

function BackButton(props) {
    return (
        !props.isDefaultScreen 
            ? 
                <div>
                    <button className="button-back" onClick={() => props.handleClick(true)}>
                        <img src='/IMG/arrow.svg' alt="arrow.svg"/>
                        <label>НАЗАД К СПИСКУ СТУДЕНТОВ</label>
                    </button>
                </div>
            : null
        );
}

export default BackButton;