import React from 'react';
import InputField from './InputField';
import './index.css';
import SortedSelector from './SelectorField';

export default function Content(props) {
    const specialities = [
        'Прикладная информатика',
        'Механика',
        'Математика',
        'Компьютерные науки',
        'Фундаментальная информатика'
    ];
    const groups = ['ПИ-101', 'ПИ-102'];
    const colors = ['blue', 'red', 'green', 'yellow', 'black', 'orange', 'rainbow']

    return (
        !props.isDefaultScreen
            ?
                <>
                    <div className="content-container">
                        <InputField name="ФИО" placeholder="Иванов Иван Иванович" type="text"/>
                        <InputField name="Email" placeholder="proverka@example.com" type="email"/>
                        <SortedSelector name="Специальность" items={specialities.slice()}/>
                        <SortedSelector name="Группа" items={groups.slice()}/>
                        <SortedSelector name="Пол" items={['Мужской', 'Женский']}/>
                        <SortedSelector name="Любимый цвет" items={colors}/>
                    </div>
                    <button className="submit">
                        <div className="submit-background">
                            <label className="submit-text">Создать</label>
                        </div>
                    </button>
                </>
            : null
    );
}