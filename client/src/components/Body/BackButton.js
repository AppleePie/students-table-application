import React from 'react';

export default function BackButton(props) {
    const arrow = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 3.5L1 10.0567L7.5 16.6135" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 10H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
    return (
        !props.isDefaultScreen 
            ? 
                <button className="button-back" onClick={() => props.handleClick(true)}>
                    {arrow}
                    <span>НАЗАД К СПИСКУ СТУДЕНТОВ</span>
                </button>
            : null
        );
}