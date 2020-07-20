import React, { useState } from 'react';

export default function InputField(props) {
    const [value, setValue] = useState('');
    const text = value ? value.split(' ') : 'ФИ';
    if (props.changeAvatar !== undefined && text.length == 2 && text[1])
        props.changeAvatar(text[0][0] + text[1][0]);


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