import React, { useState, useEffect, useCallback } from 'react';

export default function InputField(props) {
    const [value, setValue] = useState('');
    const [isBad, setIsBad] = useState(false);

    const alarms = {
        'ФИО': 'Заполните кирилицей фамилию, имя и отчество',
        'Email': 'Неверный e-mail',
        'Возраст': 'Поле должно содержать только арабские цифры',
        'Рейтинг': 'Поле должно содержать только арабские цифры'
    };

    // const text = value ? value.split(' ') : 'ФИ';
    // if (props.changeAvatar && text.length > 1 && text[1])
    //     props.changeAvatar(text[0][0] + text[1][0]);

    const onBlur = useCallback(() => {
        const isValid = () => {
            let regex;
            switch(props.name) {
                case 'ФИО':
                    regex = /^[А-Я\sа-яЁё]+$/;
                    return value.split(' ').length >= 2 && regex.test(value);
                case 'Email':
                    regex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
                    return regex.test(value)
                default:
                    regex = /^[1-9]\d{0,2}$/;
                    return regex.test(value);
            }
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
            onBlur();
        }
    }, [onBlur, props]);

    return (
        <div className="input-field">
            <label className="field-name">{props.name}</label>
            <input
                className="field-input"
                style={{border: isBad ? '1px solid red' : '1px solid white'}}
                type={props.type}
                placeholder={props.placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
            />
            <small className="alarm" style={{visibility: isBad ? 'visible' : 'hidden'}}>{alarms[props.name]}</small>
        </div>
    );
}