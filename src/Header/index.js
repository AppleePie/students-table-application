import React from 'react';
import './index.css';

function Header() {
    return (
        <div className="header">
            <img className="circles" src='/IMG/circles.svg' alt = "circles.svg"/>
            <label className="text-students-header">STUDENTS</label>
        </div>
    );
}

export default Header;