import React, { useState } from 'react';
import './index.css';

export default function PseudoSelect(props) {
    const items = props.items.slice();
    const handleClick = (item) => props.action(item);

    const [currentItem, setCurrentItem] = useState(null)


    return (
        <div className="pseudo-select-options">
            {
                items.map((item, index) => {
                    return (
                        <button 
                            key={index} 
                            className="option" 
                            onClick={() => handleClick(item)} 
                            onMouseEnter={(e) => setCurrentItem(item)}
                        >
                            <label style={{backgroundColor: "none"}}>{item}</label>
                            {currentItem === item ? <img src='/IMG/ok.svg' style={{position: 'absolute', right: "10%"}} alt="Выбрано"/> : null}
                        </button>
                    );
                })
            }
        </div>
    );
}