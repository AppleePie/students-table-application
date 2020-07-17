import React, { useState } from 'react';

export default function Selector(props) {
    const [colour, setColour] = useState("#808080");
    let items = props.items.slice();
    return (
        <div className="input-field">
            <label className="field-name">{props.name}</label>
            <select
                className="field-value"
                style={{color: colour}} onClick={() => setColour("#000000")}
            >
                <option value='' disabled selected hidden>{items[0]}</option>
                {
                   items.map((item, index) => <option key={index} className="sort-type">{item}</option>)
                }
            </select>
        </div>
    );
}