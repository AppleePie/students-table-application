import React from 'react';
import './index.css';

export default function Header() {
    const isBigScreen =  window.outerWidth <= 480;
    const title = isBigScreen ? 'STUDENTS by' : 'STUDENTS';
    return (
        <header>
            <div className="circle">
                <div className="inner-circle"/>
            </div>
            <span className="text-students-header">{title}</span>
            {isBigScreen ? <span className="text-author-header">AppleePie</span> : null}
        </header>
    );
}