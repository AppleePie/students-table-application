import React from 'react';

export default function NewStudentButton(props) {
    const plus = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.99999C2 9.42369 2.46718 8.95651 3.04348 8.95651H16.9565C17.5328 8.95651 18 9.42369 18 9.99999C18 10.5763 17.5328 11.0435 16.9565 11.0435H3.04348C2.46718 11.0435 2 10.5763 2 9.99999Z" fill="white"/>
            <path d="M8.95679 3.04348C8.95679 2.46718 9.42397 2 10.0003 2C10.5766 2 11.0437 2.46718 11.0437 3.04348V16.9565C11.0437 17.5328 10.5766 18 10.0003 18C9.42397 18 8.95679 17.5328 8.95679 16.9565V3.04348Z" fill="white"/>
        </svg>
    );
    
    return (
        <button className="button-add-student" onClick={() => props.handleClick(false)}>
            <div className='button-text-container'>
                {plus}
                <span>Добавить студента</span>
            </div>
        </button>
    );
}