import React, { useState } from 'react';

export default function InputField(props) {
    const [value, setValue] = useState('');

    return (
        <div className="input-field">
            <label className="field-name">{props.name}</label>
            <input
                className="field-input"
                type={props.type}
                placeholder={props.placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}