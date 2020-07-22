import React from 'react';
import './index.css';

export default function PseudoSelect(props) {
    const items = props.items.slice();
    const handleClick = (item, index) => {
        props.action(item);
        props.setSelectedItemId(index);
    }

    return (
        <div className="pseudo-select-options">
            {
                items.map((item, index) => {
                    return (
                        <button 
                            id={index}
                            key={index} 
                            className="option" 
                            onClick={() => handleClick(item, index)}
                        >
                            {item}
                            {index === props.selectedItemId ? <img src='/IMG/ok.svg' style={{position: 'absolute', right: "10%"}} alt="Выбрано"/> : null}
                        </button>
                    );
                })
            }
        </div>
    );
}