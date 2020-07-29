import React from 'react';
import InputField from './InputField';
import SelectorField from './SelectorField';
import ColorsSelector from './ColorCircles';
import SpecAndGroup from './SpecAndGroup';

export default class Form extends React.Component {
    state = {
        "ФИО": "",
        "Email": "",
        "Специальность": "",
        "Группа": "",
        "Рейтинг": "",
        "Пол": "",
        "Любимый цвет": ""
    };

    handleChange = (name, value) => {
        const temp = {};
        temp[name] = value;
        this.setState(temp);
        setTimeout(() => {
            console.log(JSON.stringify(this.state))
        }, 200);
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('Пимав')
        fetch('/api/post', { 
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    };

    render() {
        return (
            <>
                <div className="content-container">
                    <InputField name="ФИО" handleChange={this.handleChange} placeholder="Полное имя" type="text" changeAvatar={this.props.changeAvatar}/>
                    <InputField name="Email" handleChange={this.handleChange} placeholder="proverka@example.com" type="email"/>
                    <SpecAndGroup handleChange={this.handleChange}/>
                    <InputField name="Рейтинг" handleChange={this.handleChange} placeholder="0" type="text" />
                    <SelectorField name="Пол" handleChange={this.handleChange} items={['Мужской', 'Женский']}/>
                    <ColorsSelector handleChange={this.handleChange} name="Любимый цвет"/>
                </div>
                <button className="submit" type="submit" onClick={this.handleSubmit}>
                    <label className="submit-text">Создать</label>
                </button>
            </>
        );
    };
}