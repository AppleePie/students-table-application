import React, { useState } from 'react';
import InputField from './InputField';
import SelectorField from './SelectorField';
import ColorsSelector from './ColorCircles';
import SpecAndGroup from './SpecAndGroup';
import Avatar from './Avatar';

export default function Form(props) {
    const [data, setData] = useState({
        "ФИО": "",
        "Email": "",
        "Специальность": "",
        "Группа": "",
        "Рейтинг": "",
        "Возраст": "",
        "Пол": "",
        "Любимый цвет": "",
        avatar: ''
    });
    const [isValid, setIsValid] = useState(true);

    const handleChange = (name, value) => {
        const temp = data;
        temp[name] = value;
        setData(temp);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (hasPassedValidation()) {
            const dataForResponse = new FormData();
            for (const field in data) {
                dataForResponse.append(field, data[field]);
            };
            fetch('/api/post', { 
                method: 'POST',
                body: dataForResponse
            })
                .then(() => props.handleClick(true))
                .catch(err => console.error(err));
        } else {
            setIsValid(false);
        }
    };

    const hasPassedValidation = () => !Object.values(data).includes('');

    return (
        <>
            <Avatar handleChange={handleChange}/>
            <div className="form-container">
                <InputField
                    name="ФИО" 
                    handleChange={handleChange}
                    isValid={isValid} 
                    setIsValid={setIsValid}
                    placeholder="Полное имя" 
                    type="text"
                />
                <InputField 
                    name="Email" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    setIsValid={setIsValid}
                    placeholder="proverka@example.com" 
                    type="email"
                />
                <SpecAndGroup 
                    handleChange={handleChange}
                    isValid={isValid} 
                    setIsValid={setIsValid}
                />
                <InputField 
                    name="Рейтинг" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    setIsValid={setIsValid}
                    placeholder="0" 
                    type="text" 
                />
                <InputField 
                    name="Возраст" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    setIsValid={setIsValid}
                    placeholder="0" 
                    type="text"
                />
                <SelectorField 
                    name="Пол" 
                    handleChange={handleChange} 
                    isValid={isValid} 
                    setIsValid={setIsValid}
                    items={['Мужской', 'Женский']}
                />
                <ColorsSelector
                    name="Любимый цвет" 
                    handleChange={handleChange}
                    isValid={isValid} 
                    setIsValid={setIsValid}
                />
            </div>
            <button  className="submit" type="submit" onClick={handleSubmit}>
                <label className="submit-text">Создать</label>
            </button>
        </>
    );
}