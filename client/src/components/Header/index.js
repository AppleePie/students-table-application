import React from 'react';
import './index.css';

export default function Header() {
    return (
        <div className="header">
            <div className="circle">
                <div className="inner-circle"/>
            </div>
            <span className="text-students-header">STUDENTS by</span>
            <span className="text-author-header"> AppleePie</span>
        </div>
    );
}