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
            "Возраст": "",
            "Пол": "",
            "Любимый цвет": "",
            avatar: ''
        }
    };

    handleChange = (name, value) => {
        const temp = this.state.data;
        temp[name] = value;
        this.setState({data: temp});
    };

    hadUniqueFileName = (originalFileName) => {
        const data = this.state.data;
        const temp = originalFileName.split('.');
        const extension = temp[temp.length - 1];
        return data['Email'] + '.' + extension
    }

    handleSubmit = event => {
        event.preventDefault();
        const avatarFileName = this.hadUniqueFileName(this.state.data.avatar.name);
        this.handleChange('Аватар', `/uploads/${avatarFileName}`);

        if (this.hasPassedValidation()) {
            const data = this.state.data;
            const dataForResponse = new FormData();
            for (const field in data) {
                if (field === 'avatar') {
                    dataForResponse.append(field, data[field], avatarFileName);
                    continue;
                }
                dataForResponse.append(field, data[field]);
            };
            fetch('/api/post', { 
                method: 'POST',
                body: dataForResponse
            })
                .catch(e => console.log(e));
            this.props.handleClick(true);
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
                    <InputField name="Возраст" handleChange={this.handleChange} isValid={this.isValid} placeholder="0" type="text" />
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