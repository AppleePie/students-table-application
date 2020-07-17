<<<<<<< HEAD
import React from 'react';
import './index.css';

function Header() {
    return (
        <div className="header">
            <img className="circles" src='/IMG/circles.svg' alt = "circles.svg"/>
=======
import './index.css';
import Circles from './Circles';
import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <Circles/>
>>>>>>> 18540fd6ec77811be180384da7d284210d310cf9
            <label className="text-students-header">STUDENTS</label>
        </div>
    );
}

export default Header;