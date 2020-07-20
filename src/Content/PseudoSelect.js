import React, { useState } from 'react';

export default function PseudoSelect(props) {
    const items = props.items.slice();
    const [isChoosen, setState] = useState(false);
    const [choose, setChoose] = useState(items[0]);
    const [back, setBack] = useState(null);
    const [textColor, setColor] = useState("#808080");

    return (
        <div className="pseudo-select">
            <label className="field-name">{props.name}</label>
            <button className="field-select" style={{color: textColor}}>
                <label>{choose}</label>
            </button>
            {
                isChoosen
                    ? 
                        <div className="pseudo-select-options">
                            <button className="option" style={{color: '#808080'}} disabled>{props.placeholder ? props.placeholder : items[0]}</button>
                            {
                                items.map((item, index) => {
                                    return (
                                        <button 
                                            key={index} 
                                            className="option" 
                                            onClick={() => handleClick(item)} 
                                            onMouseEnter={(e) => setBack(item)}
                                        >
                                            <label style={{backgroundColor: "none"}}>{item}</label>
                                            {back === item ? <img src='/IMG/ok.svg' className="ok" alt="Выбрано"/> : null}
                                        </button>
                                    );
                                })
                            }
                        </div>
                    : null
            }
        </div>
    );

    function handleClick(item) {
        setChoose(item);
        setState(!isChoosen);
    }
}