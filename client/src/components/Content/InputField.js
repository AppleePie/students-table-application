import React, { useState, useEffect, useCallback } from 'react';

export default function InputField(props) {
    const [value, setValue] = useState('');
    const [isBad, setIsBad] = useState(false);

    const alarms = {
        'ФИО': 'Заполните ФИО кириллицей',
        'Email': 'Неверный e-mail',
        'Возраст': 'Поле не должно оставаться пустым',
        'Рейтинг': 'Поле не должно оставаться пустым'
    };

    // const text = value ? value.split(' ') : 'ФИ';
    // if (props.changeAvatar && text.length > 1 && text[1])
    //     props.changeAvatar(text[0][0] + text[1][0]);

    const handleBlur = useCallback(() => {
        const isValid = () => {
            let regex;
            if (props.name === 'ФИО') {
                regex = /^[А-Я\sа-яЁё]+$/;
                return value.split(' ').length >= 2 && regex.test(value);
            }
            if (props.name === 'Email') {
                regex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
                return regex.test(value)
            }
            return true;
        }

        if (isValid()) {
            setIsBad(false);
            props.handleChange(props.name, value);
        } else {
            setIsBad(true);
        }
    }, [props, value]);

    useEffect(() => {
        if (!props.isValid) {
            handleBlur();
        }
    }, [handleBlur, props]);

    const handleChange = (e) => {
        setValue(e.target.value.length <= 3 ? e.target.value : e.target.value.slice(0, 3));
    }

    return (
        <div className="input-field">
            <label className="field-name">{props.name}</label>
            <input
                className="field-input"
                style={{border: isBad ? '1px solid red' : '1px solid white'}}
                type={props.type}
                placeholder={props.placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <small className="alarm" style={{visibility: isBad ? 'visible' : 'hidden'}}>{alarms[props.name]}</small>
        </div>
    );
}