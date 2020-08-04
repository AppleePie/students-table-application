import React from 'react';
import InputField from './InputField';
import SelectorField from './SelectorField';
import ColorsSelector from './ColorCircles';
import SpecAndGroup from './SpecAndGroup';
import Avatar from './Avatar';

export default class Form extends React.Component {
    state = {
        data: {
            "Аватар": "",
            "ФИО": "",
            "Email": "",
            "Специальность": "",
            "Группа": "",
            "Рейтинг": "",
            "Пол": "",
            "Любимый цвет": "",
            filedata: ''
        }
    };

    handleChange = (name, value) => {
        const temp = this.state.data;
        temp[name] = value;
        this.setState({data: temp});
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.hasPassedValidation) {
            const data = this.state.data;
            const dataForResponse = new FormData();
            for (const field in data) {
                dataForResponse.append(field, data[field]);
            };

            this.props.handleClick(true);
            fetch('/api/post', { 
                method: 'POST',
                body: dataForResponse
            })
                .catch(e => console.log(e));
        }
    };

    hasPassedValidation = () => {
        const data = this.state.data;
        const notifications = [];
        for (const key in data) {
            if (data[key] === '') {
                notifications.push(key);
            }
        }
        if (notifications.length !== 0) {
           alert('Внимание! Вы не заполнили: ' + notifications.join(', ').toLowerCase());
        }
        
        return notifications.length === 0;
    };

    isValid = (value, regex) => regex.test(value);

    render() {
        return (
            <>
                <Avatar handleChange={this.handleChange}/>
                <div className="form-container">
                    <InputField name="ФИО" handleChange={this.handleChange} isValid={this.isValid} placeholder="Полное имя" type="text"/>
                    <InputField name="Email" handleChange={this.handleChange} isValid={this.isValid} placeholder="proverka@example.com" type="email"/>
                    <SpecAndGroup handleChange={this.handleChange}/>
                    <InputField name="Рейтинг" handleChange={this.handleChange} isValid={this.isValid} placeholder="0" type="text" />
                    <SelectorField name="Пол" handleChange={this.handleChange} items={['Мужской', 'Женский']}/>
                    <ColorsSelector name="Любимый цвет" handleChange={this.handleChange}/>
                </div>
                <button  className="submit" type="submit" onClick={this.handleSubmit}>
                    <label className="submit-text">Создать</label>
                </button>
            </>
        );
    };
}