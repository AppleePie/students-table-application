import './index.css';
import Circles from './Circles';
import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <Circles/>
            <label className="text-students-header">STUDENTS</label>
        </div>
    );
}

export default Header;