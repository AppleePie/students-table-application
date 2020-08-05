import React, { useState } from 'react';

export default function InputField(props) {
    const [value, setValue] = useState('');
    const [isBad, setIsBad] = useState(false);

    // const text = value ? value.split(' ') : 'ФИ';
    // if (props.changeAvatar && text.length > 1 && text[1])
    //     props.changeAvatar(text[0][0] + text[1][0]);

    const handleChange = () => {
        let regex;

        switch(props.name) {
            case 'ФИО':
                regex = /[A-zА-яЁё]/;
                break;
            case 'Email':
                regex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
                break;
            default:
                regex = /[1-9][0-9]/;
        }

        if (props.isValid(value, regex)) {
            setIsBad(false);
            props.handleChange(props.name, value);
        } else {
            setIsBad(true);
        }
    }

    return (
        <div className="input-field">
            <label className="field-name">{props.name}</label>
            <input
                className="field-input"
                style={{border: isBad ? '1px solid red' : 'none'}}
                type={props.type}
                placeholder={props.placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => handleChange()}
            />
        </div>
    );
}